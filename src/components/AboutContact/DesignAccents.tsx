'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DesignAccents = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    // パードの型定義
    interface Node {
      x: number;
      y: number;
      z: number;
      size: number;
      baseAlpha: number;
      breathPhase: number;
      colorPhase: number; // 色の変化用
      velocity: {
        x: number;
        y: number;
      };
    }

    // 接続の型定義
    interface Connection {
      startNode: Node;
      endNode: Node;
      lightProgress: number;
      active: boolean;
    }

    // ノードとコネクションの配列
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    // カラーパレットの定義
    const colors = {
      blue: { r: 59, g: 130, b: 246 },   // blue-500
      purple: { r: 139, g: 92, b: 246 },  // purple-500
      indigo: { r: 99, g: 102, b: 241 }   // indigo-500
    };

    // 色の補間関数
    const interpolateColor = (phase: number) => {
      const normalizedPhase = phase % (Math.PI * 2);
      let r, g, b;
      
      if (normalizedPhase < Math.PI * 2/3) {
        // blue to purple
        const t = normalizedPhase / (Math.PI * 2/3);
        r = colors.blue.r + (colors.purple.r - colors.blue.r) * t;
        g = colors.blue.g + (colors.purple.g - colors.blue.g) * t;
        b = colors.blue.b + (colors.purple.b - colors.blue.b) * t;
      } else if (normalizedPhase < Math.PI * 4/3) {
        // purple to indigo
        const t = (normalizedPhase - Math.PI * 2/3) / (Math.PI * 2/3);
        r = colors.purple.r + (colors.indigo.r - colors.purple.r) * t;
        g = colors.purple.g + (colors.indigo.g - colors.purple.g) * t;
        b = colors.purple.b + (colors.indigo.b - colors.purple.b) * t;
      } else {
        // indigo to blue
        const t = (normalizedPhase - Math.PI * 4/3) / (Math.PI * 2/3);
        r = colors.indigo.r + (colors.blue.r - colors.indigo.r) * t;
        g = colors.indigo.g + (colors.blue.g - colors.indigo.g) * t;
        b = colors.indigo.b + (colors.blue.b - colors.indigo.b) * t;
      }
      
      return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
    };

    // ノードの生成
    const createNode = (): Node => {
      const centerY = canvas.height * 0.5;
      return {
        x: Math.random() * canvas.width,
        y: centerY + (Math.random() - 0.5) * (canvas.height * 0.4),
        z: Math.random(),
        size: Math.random() * 4 + 5,
        baseAlpha: Math.random() * 0.25 + 0.35,
        breathPhase: Math.random() * Math.PI * 2,
        colorPhase: Math.random() * Math.PI * 2,
        velocity: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.005
        }
      };
    };

    // 初期ノードの生成
    const nodeCount = 15; // ノード数を調整
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(createNode());
    }

    // コネクションの更新
    const updateConnections = () => {
      connections.length = 0; // コネクションをリセット
      
      // 最も近いノード同士を接続
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const nearestNodes = nodes
          .filter((_, index) => index !== i)
          .sort((a, b) => {
            const distA = Math.hypot(node.x - a.x, node.y - a.y);
            const distB = Math.hypot(node.x - b.x, node.y - b.y);
            return distA - distB;
          })
          .slice(0, 2); // 各ノードから最も近い2つのノードと接続

        nearestNodes.forEach(nearNode => {
          if (!connections.some(conn => 
            (conn.startNode === node && conn.endNode === nearNode) ||
            (conn.startNode === nearNode && conn.endNode === node)
          )) {
            connections.push({
              startNode: node,
              endNode: nearNode,
              lightProgress: Math.random(), // ランダムな初期位置
              active: Math.random() < 0.3 // 30%の確率でアクティブ
            });
          }
        });
      }
    };

    // ノードの更新
    let lastTime = 0;
    const updateNodes = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      const timeScale = deltaTime / 1000;

      nodes.forEach(node => {
        // 位置の更新（デルタタイムを考慮）
        node.x += node.velocity.x * timeScale * 0.5;
        node.y += node.velocity.y * timeScale * 0.5;

        // 呼吸アニメーション
        node.breathPhase += 0.0003 * timeScale;
        if (node.breathPhase > Math.PI * 2) node.breathPhase = 0;

        // 画面端での跳ね返り
        if (node.x < 0 || node.x > canvas.width) {
          node.velocity.x *= -0.8;
          node.velocity.y = (Math.random() - 0.5) * 0.005;
        }

        // Y座標の制限（広い範囲を維持）
        const centerY = canvas.height * 0.5;
        const maxDistance = canvas.height * 0.35;
        if (Math.abs(node.y - centerY) > maxDistance) {
          node.y = centerY + (maxDistance * Math.sign(node.y - centerY));
          node.velocity.y *= -0.4;
        }

        // ゆらゆら動作（大きな振幅、低速）
        const normalizedTime = time / 30000; // 30秒で1サイクルに延長
        const waveAmplitude = canvas.width * 0.15;
        const verticalAmplitude = canvas.height * 0.05;
        
        // timeScaleを使用せず、直接小さな値を加算
        node.x += Math.sin(normalizedTime + node.breathPhase) * 0.1;
        node.y += Math.cos(normalizedTime + node.breathPhase) * 0.05;

        // 色相の更新（非常にゆっくり）
        node.colorPhase += 0.0001 * timeScale;
        if (node.colorPhase > Math.PI * 2) node.colorPhase = 0;
      });
    };

    // 描画関数の調整
    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // コネクションの描画
      connections.forEach(conn => {
        const startColor = interpolateColor(conn.startNode.colorPhase);
        const endColor = interpolateColor(conn.endNode.colorPhase);

        // 基本の線
        ctx.beginPath();
        ctx.moveTo(conn.startNode.x, conn.startNode.y);
        ctx.lineTo(conn.endNode.x, conn.endNode.y);
        const avgAlpha = (conn.startNode.baseAlpha + conn.endNode.baseAlpha) / 2;
        ctx.strokeStyle = `rgba(${startColor.r}, ${startColor.g}, ${startColor.b}, ${avgAlpha * 0.25})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // 光の表現
        if (conn.active) {
          const gradient = ctx.createLinearGradient(
            conn.startNode.x, conn.startNode.y,
            conn.endNode.x, conn.endNode.y
          );

          const lightPos = conn.lightProgress;
          gradient.addColorStop(Math.max(0, lightPos - 0.2), 
            `rgba(${startColor.r}, ${startColor.g}, ${startColor.b}, 0)`);
          gradient.addColorStop(lightPos, 
            `rgba(${endColor.r}, ${endColor.g}, ${endColor.b}, ${avgAlpha * 0.6})`);
          gradient.addColorStop(Math.min(1, lightPos + 0.2), 
            `rgba(${endColor.r}, ${endColor.g}, ${endColor.b}, 0)`);

          ctx.beginPath();
          ctx.moveTo(conn.startNode.x, conn.startNode.y);
          ctx.lineTo(conn.endNode.x, conn.endNode.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          conn.lightProgress += 0.002;
          if (conn.lightProgress >= 1) {
            conn.lightProgress = 0;
            conn.active = Math.random() < 0.2;
          }
        }
      });

      // ノードの描画
      nodes.forEach(node => {
        const breathEffect = 1 + Math.sin(node.breathPhase) * 0.15;
        const currentSize = node.size * breathEffect;
        const alpha = node.baseAlpha * (0.8 + Math.sin(node.breathPhase) * 0.2);
        const color = interpolateColor(node.colorPhase);

        // ノードの影
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.2})`;
        ctx.filter = 'blur(3px)';
        ctx.fill();
        ctx.filter = 'none';

        // ノードの本体
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.fill();
      });
    };

    // アニメーションループ
    let lastConnectionUpdate = 0;
    let frameCount = 0;
    const animate = (time: number) => {
      frameCount++;
      // フレームスキップで更新頻度を下げる
      if (frameCount % 2 === 0) { // 30FPSに制限
        updateNodes(time);
        
        // コネクションの更新は1秒ごと
        if (time - lastConnectionUpdate > 1000) {
          updateConnections();
          lastConnectionUpdate = time;
        }
        
        draw(time);
      }
      requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none">
      <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat opacity-5" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
};

export default DesignAccents; 