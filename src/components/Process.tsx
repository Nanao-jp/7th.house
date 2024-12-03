import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { HiArrowsExpand } from 'react-icons/hi';
import Section from '@/components/ui/Section';

const Process = () => {
  const processes = [
    {
      step: "01",
      title: "要件ヒアリング",
      description: "人による丁寧なヒアリングにAIの分析力を組み合わせる",
      traditional: "経験豊富な担当者による\nニーズの深い理解",
      enhancement: "AIによる要件の\n体系的な分析と提案",
      benefit: "より正確で包括的な要件定義を実現"
    },
    {
      step: "02",
      title: "設計・プランニング",
      description: "人間の創造性とAIの分析力による最適な設計",
      traditional: "プロジェクト経験に基づく\n設計判断",
      enhancement: "データ分析による\n設計の最適化",
      benefit: "経験と分析の融合による確実な設計"
    },
    {
      step: "03",
      title: "開発・実装",
      description: "従来の開発手法をAIがサポートし効率を向上",
      traditional: "熟練した開発者による\n確実な実装",
      enhancement: "AIによる開発補助と\n品質チェック",
      benefit: "高品質な実装と開発速度の向上"
    },
    {
      step: "04",
      title: "テスト・デプロイ",
      description: "人間の判断とAIの自動化による確実な展開",
      traditional: "細やかな動作確認と\n慎重なデプロイ",
      enhancement: "自動テストと\nデプロイの効率化",
      benefit: "確実性と効率性の両立"
    }
  ];

  return (
    <Section 
      id="process"
      className="py-20"
      disableDefaultBackground
      fullWidth
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            人とAIの共創が<br className="sm:hidden" />実現する可能性
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            長年培ってきた開発のノウハウとAIの最新技術を組み合わせることで、
            より確実で効率的な開発プロセスを実現します
          </p>
        </motion.div>

        <div className="grid gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ 
                once: true,
                margin: "-10%",
                amount: 0.3
              }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 border border-white/10"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 md:w-2/5 space-y-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-500">{process.step}</span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{process.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-300">{process.description}</p>
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-blue-500/20">
                      <h4 className="text-sm md:text-base font-semibold text-blue-400 mb-2">従来のやり方</h4>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-line">{process.traditional}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-purple-500/20">
                      <h4 className="text-sm md:text-base font-semibold text-purple-400 mb-2">AI による強化</h4>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-line">{process.enhancement}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/5">
                    <p className="text-center text-sm md:text-base text-gray-300">
                      <span className="font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-300 text-transparent bg-clip-text">実現できること：</span> {process.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process; 