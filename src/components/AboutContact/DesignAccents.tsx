'use client'

import { useEffect, useRef } from 'react';

const DesignAccents = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCountRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const isVisibleRef = useRef(true);
  const lastUpdateTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 基本的なノードの構造は維持
    interface Node {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      breathPhase: number;
      colorIndex: number;
      velocity: {
        x: number;
        y: number;
      };
    }

    const colors = [
      { r: 59, g: 130, b: 246 },  // blue-500
      { r: 139, g: 92, b: 246 },  // purple-500
      { r: 99, g: 102, b: 241 }   // indigo-500
    ];

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes: Node[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height * 0.5 + (Math.random() - 0.5) * (canvas.height * 0.4),
      size: Math.random() * 4 + 6,
      baseAlpha: Math.random() * 0.3 + 0.4,
      breathPhase: Math.random() * Math.PI * 2,
      colorIndex: Math.floor(Math.random() * colors.length),
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.2
      }
    }));

    // Intersection Observerの最適化
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
        if (isVisibleRef.current) {
          if (!animationFrameRef.current) {
            animate(performance.now());
          }
        } else {
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = undefined;
          }
        }
      },
      { 
        threshold: 0,
        rootMargin: '50px'
      }
    );

    observer.observe(canvas);

    const updateNodes = (time: number) => {
      nodes.forEach(node => {
        node.x += node.velocity.x;
        node.y += node.velocity.y;
        node.breathPhase += 0.03;

        if (node.x < 0 || node.x > canvas.width) {
          node.velocity.x *= -1;
        }

        const centerY = canvas.height * 0.5;
        const maxDistance = canvas.height * 0.35;
        if (Math.abs(node.y - centerY) > maxDistance) {
          node.y = centerY + (maxDistance * Math.sign(node.y - centerY));
          node.velocity.y *= -1;
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.3;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const color = colors[node.colorIndex];
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
            ctx.stroke();
          }
        });
      });

      nodes.forEach(node => {
        const color = colors[node.colorIndex];
        const size = node.size * (1 + Math.sin(node.breathPhase) * 0.2);
        const alpha = node.baseAlpha;

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.fill();
      });
    };

    // FPS制御の最適化
    const animate = (time: number) => {
      if (!isVisibleRef.current) return;

      const targetFPS = 24;
      const frameInterval = 1000 / targetFPS;
      const deltaTime = time - lastUpdateTimeRef.current;

      if (deltaTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      lastUpdateTimeRef.current = time - (deltaTime % frameInterval);
      updateNodes(time);
      draw();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (isVisibleRef.current) {
      lastUpdateTimeRef.current = performance.now();
      animate(lastUpdateTimeRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}

export default DesignAccents; 