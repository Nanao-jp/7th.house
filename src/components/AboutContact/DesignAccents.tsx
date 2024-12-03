'use client'

import { useEffect, useRef } from 'react';

const DesignAccents = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCountRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastUpdateTime = 0;

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

    // 事前定義された色を使用
    const colors = [
      { r: 59, g: 130, b: 246 },  // blue-500
      { r: 139, g: 92, b: 246 },  // purple-500
      { r: 99, g: 102, b: 241 }   // indigo-500
    ];

    // キャンバスのサイズ設定
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // パードの生成（動きを大きく）
    const nodes: Node[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height * 0.5 + (Math.random() - 0.5) * (canvas.height * 0.4),
      size: Math.random() * 4 + 6,  // サイズを少し大きく
      baseAlpha: Math.random() * 0.3 + 0.4,  // 透明度を少し上げる
      breathPhase: Math.random() * Math.PI * 2,
      colorIndex: Math.floor(Math.random() * colors.length),
      velocity: {
        x: (Math.random() - 0.5) * 0.5,  // X軸の動きを大きく
        y: (Math.random() - 0.5) * 0.2    // Y軸の動きも大きく
      }
    }));

    // Intersection Observerの設定（デバッグログを追加）
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Intersection Observer Debug:', {
          isIntersecting: entries[0].isIntersecting,
          boundingClientRect: entries[0].boundingClientRect,
          intersectionRatio: entries[0].intersectionRatio,
          time: new Date().toISOString(),
          elementSize: {
            width: canvas.width,
            height: canvas.height
          },
          parentElement: canvas.parentElement ? {
            offsetWidth: canvas.parentElement.offsetWidth,
            offsetHeight: canvas.parentElement.offsetHeight,
            className: canvas.parentElement.className
          } : null
        });

        isVisibleRef.current = entries[0].isIntersecting;
        if (isVisibleRef.current) {
          console.log('🟢 Element is visible - Starting animation');
          if (!animationFrameRef.current) {
            animate(0);
          }
        } else {
          console.log('🔴 Element is not visible - Stopping animation');
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = undefined;
          }
        }
      },
      { 
        threshold: 0,
        // rootMarginを100%に変更して判定範囲を広げる
        rootMargin: '100% 0px'
      }
    );

    // 要素の初期状態をログ
    console.log('Initial Canvas State:', {
      canvas: {
        width: canvas.width,
        height: canvas.height,
        className: canvas.className,
        style: canvas.style,
        getBoundingClientRect: canvas.getBoundingClientRect()
      },
      parent: canvas.parentElement ? {
        className: canvas.parentElement.className,
        style: canvas.parentElement.style,
        getBoundingClientRect: canvas.parentElement.getBoundingClientRect()
      } : null
    });

    observer.observe(canvas);

    // 更新処理の最適化
    const updateNodes = (time: number) => {
      nodes.forEach(node => {
        node.x += node.velocity.x;
        node.y += node.velocity.y;
        node.breathPhase += 0.03;  // 呼吸アニメーションを速く

        // 画面端での処理
        if (node.x < 0 || node.x > canvas.width) {
          node.velocity.x *= -1;
        }

        // Y軸の制限
        const centerY = canvas.height * 0.5;
        const maxDistance = canvas.height * 0.35;
        if (Math.abs(node.y - centerY) > maxDistance) {
          node.y = centerY + (maxDistance * Math.sign(node.y - centerY));
          node.velocity.y *= -1;
        }
      });
    };

    // 描画の最適化（接続線の距離を調整）
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ノード間の接続を描画
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < 150) {  // 接続距離を増やす
            const alpha = (1 - distance / 150) * 0.3;  // 透明度も調整
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const color = colors[node.colorIndex];
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
            ctx.stroke();
          }
        });
      });

      // ノードの描画
      nodes.forEach(node => {
        const color = colors[node.colorIndex];
        const size = node.size * (1 + Math.sin(node.breathPhase) * 0.2);  // 呼吸の振幅を大きく
        const alpha = node.baseAlpha;

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.fill();
      });
    };

    // アニメーションループの最適化
    const animate = (time: number) => {
      if (!isVisibleRef.current) return;

      const deltaTime = time - lastUpdateTime;
      
      // 約30FPSの制限（33.33ms）
      if (deltaTime >= 33) {
        lastUpdateTime = time;
        updateNodes(time);
        draw();
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // 初期アニメーション開始
    if (isVisibleRef.current) {
      lastUpdateTime = performance.now();
      animate(lastUpdateTime);
    }

    // クリーンアップ
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
};

export default DesignAccents; 