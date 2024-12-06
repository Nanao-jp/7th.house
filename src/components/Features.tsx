import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import { viewportConfig } from '@/constants/viewport';
import Section from '@/components/ui/Section';
import LazyCard from '@/components/ui/LazyCard';
import { FaRocket, FaCogs } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="w-8 h-8 text-blue-500" />,
    title: "高速開発",
    description: "AIと最新技術で開発時間を大幅短縮",
    details: "効率的な開発プロセスで、スピーディーな実装を実現"
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-purple-500" />,
    title: "データ分析",
    description: "データ分析で的確な判断をサポート",
    details: "ユーザー行動と市場動向を分析し、最適な提案を実現"
  },
  {
    icon: <FaCogs className="w-8 h-8 text-indigo-500" />,
    title: "拡張性",
    description: "ビジネスの成長に合わせて進化するシステム",
    details: "将来の機能追加や規模拡大にも柔軟に対応"
  }
];

const Features = () => {
  return (
    <Section id="features" className="py-32 md:py-40">
      <motion.div
        {...fadeInUp}
        viewport={viewportConfig}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          特徴と強み
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          技術力と創造性でビジネスをサポート
        </p>
      </motion.div>

      <motion.div
        {...fadeInUp}
        viewport={viewportConfig}
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <LazyCard
            key={index}
            variant="feature"
            withHover
            padding="large"
            index={index}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 transform transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <p className="text-gray-400 text-sm">{feature.details}</p>
            </div>
          </LazyCard>
        ))}
      </motion.div>
    </Section>
  );
};

export default Features; 