import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaCogs } from 'react-icons/fa';

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
    <section className="relative py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-16 leading-tight"
        >
          AIが実現する<br className="sm:hidden" />次世代の開発
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <p className="text-gray-400 text-sm">{feature.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 