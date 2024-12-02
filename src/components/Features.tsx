import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaCogs } from 'react-icons/fa';
import { fadeInUp } from '@/constants/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const Features = () => {
  const features = [
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "高速開発",
      description: "AIによる自動化とコード生成により、開発時間を最大70%削減",
      details: "反復的なタスクの自動化、コードの自動生成、テスト自動化により開発スピードを大幅に向上"
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-purple-500" />,
      title: "データ駆動の意思決定",
      description: "AIが分析した市場データと最新トレンドに基づく意思決定",
      details: "ユーザー行動分析、市場動向予測、競合分析を活用した戦略的な開発アプローチ"
    },
    {
      icon: <FaCogs className="w-8 h-8 text-indigo-500" />,
      title: "カスタマイズ可能なソリューション",
      description: "ビジネスニーズに合わせた柔軟なAIソリューション",
      details: "スケーラブルなアーキテクチャ、モジュール化された設計、柔軟なAPIインテグレーション"
    }
  ];

  return (
    <Section 
      id="features"
      className="py-20"
      disableDefaultBackground
      fullWidth
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          {...fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-16 leading-tight"
        >
          AIが実現する<br className="sm:hidden" />次世代の開発
        </motion.h2>
        
        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="feature"
              withHover
            >
              <div className="mb-6 transform transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <p className="text-gray-400 text-sm">{feature.details}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Features; 