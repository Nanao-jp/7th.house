import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { HiArrowsExpand } from 'react-icons/hi';
import { fadeInUp, fadeInLeft, staggerChildren } from '@/constants/animations';
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
    <Section className="py-20">
      <motion.div
        {...fadeInUp}
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

      <motion.div 
        {...staggerChildren(0.2)}
        className="grid gap-8"
      >
        {processes.map((process, index) => (
          <motion.div
            key={index}
            {...fadeInLeft}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="backdrop-blur-sm bg-white/5 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="grid md:grid-cols-5 gap-4 md:gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-blue-500">{process.step}</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{process.title}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-300">{process.description}</p>
              </div>

              <div className="md:col-span-3">
                <div className="grid md:grid-cols-7 gap-2 items-center">
                  <div className="md:col-span-3 p-3 md:p-4 rounded-lg bg-gradient-to-r from-indigo-600/30 to-blue-500/30">
                    <h4 className="text-xs md:text-sm font-semibold text-blue-200 mb-2">従来のやり方</h4>
                    <p className="text-sm md:text-base text-white whitespace-pre-line">{process.traditional}</p>
                  </div>
                  
                  <div className="hidden md:flex md:col-span-1 justify-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <HiArrowsExpand className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-3 md:p-4 rounded-lg bg-gradient-to-r from-blue-900/50 to-purple-900/50">
                    <h4 className="text-xs md:text-sm font-semibold text-purple-200 mb-2">AI による強化</h4>
                    <p className="text-sm md:text-base text-white whitespace-pre-line">{process.enhancement}</p>
                  </div>
                </div>
                
                <div className="mt-3 md:mt-4 p-2 md:p-3 rounded-lg bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-purple-600/20 border border-white/5">
                  <p className="text-center text-xs md:text-sm text-white">
                    <span className="text-blue-300 font-semibold">実現できること：</span> {process.benefit}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
          開発プロセスの詳細を見る
          <BsArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </Section>
  );
};

export default Process; 