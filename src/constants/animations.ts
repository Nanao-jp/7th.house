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

// 上からのフェードイン
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: baseTransition
};

// 左からのフェードイン
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: baseTransition
};

// 子要素の連続アニメーション
export const staggerChildren = (delay: number = 0.2): Variants => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: delay }
});

// ホバー時のスケール
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  transition: baseTransition
};

// ホバー時の浮き上がり
export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { y: -2 },
  transition: baseTransition
}; 