import { Variants, Transition } from 'framer-motion'

// 共通のトランジション設定（軽量化）
const baseTransition = {
  type: "tween",
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezierによる最適化
} as const;

// より速いトランジション
const quickTransition = {
  type: "tween",
  duration: 0.2,
  ease: [0.25, 0.1, 0.25, 1],
} as const;

// transform用の共通設定
const transformConfig = {
  type: "tween",
  duration: 0.2,
  ease: [0.25, 0.1, 0.25, 1],
} as const;

// 基本的なフェードインアニメーション（最適化）
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      ...baseTransition,
      opacity: { duration: 0.3 }
    }
  }
};

// 上からのフェードイン（パフォーマンス最適化版）
export const fadeInUp: Variants = {
  initial: { 
    opacity: 0,
    y: 10 
  },
  whileInView: { 
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      opacity: { duration: 0.3 },
      transform: transformConfig
    }
  }
};

// 左からのフェードイン（パフォーマンス最適化版）
export const fadeInLeft: Variants = {
  initial: { 
    opacity: 0,
    x: -10 
  },
  whileInView: { 
    opacity: 1,
    x: 0,
    transition: {
      ...baseTransition,
      opacity: { duration: 0.3 },
      transform: transformConfig
    }
  }
};

// 子要素の連続アニメーション（パフォーマンス最適化版）
export const staggerChildren = (delay: number = 0.05): Variants => ({
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: delay,
      delayChildren: 0.1
    }
  }
});

// 子要素用の軽量アニメーション
export const staggerItem: Variants = {
  initial: { 
    opacity: 0,
    y: 10 
  },
  whileInView: { 
    opacity: 1,
    y: 0,
    transition: {
      ...quickTransition,
      opacity: { duration: 0.2 },
      transform: transformConfig
    }
  }
};

// ホバー時のスケール（軽量化）
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      ...quickTransition,
      transform: transformConfig
    }
  }
};

// ホバー時の浮き上がり（軽量化）
export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { 
    y: -2,
    transition: {
      ...quickTransition,
      transform: transformConfig
    }
  }
};

// 上からスライドインするアニメーション
export const slideInFromTop: Variants = {
  initial: { 
    opacity: 0,
    y: -20 
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      opacity: { duration: 0.3 },
      transform: transformConfig
    }
  }
};

// 共通のトランジション設定をエクスポート
export const transition: Transition = baseTransition; 