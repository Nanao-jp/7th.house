import { Variants } from 'framer-motion'

// 共通のトランジション設定
export const baseTransition = {
  duration: 0.3,
  ease: 'easeOut',
} as const;

// 基本的なフェードインアニメーション
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: baseTransition
};

// 上からのフェードイン（パフォーマンス最適化版）
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "10%" },
  transition: baseTransition
};

// 左からのフェードイン（パフォーマンス最適化版）
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "10%" },
  transition: baseTransition
};

// 子要素の連続アニメーション（パフォーマンス最適化版）
export const staggerChildren = (delay: number = 0.1): Variants => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "10%" },
  transition: { staggerChildren: delay }
});

// ホバー時のスケール（軽量化）
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.03 },
  transition: baseTransition
};

// ホバー時の浮き上がり（軽量化）
export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { y: -1 },
  transition: baseTransition
}; 