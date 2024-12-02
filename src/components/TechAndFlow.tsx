import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaPencilRuler, FaRobot, FaCode, FaCheckCircle, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFramer, SiPrisma, SiOpenai } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import { fadeInUp, staggerChildren } from '@/constants/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { Background } from './TechStack/Background';

const technologies = [
  {
    category: "フロントエンド",
    description: "最新のWeb技術で美しいUIを実現",
    techs: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-8 h-8" />,
        description: "高速な画面遷移とSEO対策"
      },
      {
        name: "React",
        icon: <SiReact className="w-8 h-8" />,
        description: "インタラクティブなUI構築"
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="w-8 h-8" />,
        description: "美しいデザインの���現"
      }
    ]
  },
  {
    category: "バックエンド",
    description: "安定性と拡張性を重視した構成",
    techs: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-8 h-8" />,
        description: "型安全な開発環境"
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="w-8 h-8" />,
        description: "効率的なDB操作"
      },
      {
        name: "Database",
        icon: <FaDatabase className="w-8 h-8" />,
        description: "データの永続化と管理"
      }
    ]
  },
  {
    category: "AI技術",
    description: "最新のAI技術を活用",
    techs: [
      {
        name: "OpenAI",
        icon: <SiOpenai className="w-8 h-8" />,
        description: "高度な自然言語処理"
      },
      {
        name: "AI開発",
        icon: <FaRobot className="w-8 h-8" />,
        description: "独自のAI機能開発"
      },
      {
        name: "AI連携",
        icon: <FaCode className="w-8 h-8" />,
        description: "APIを活用した機能実装"
      }
    ]
  }
];

const flowSteps = [
  {
    id: 1,
    title: 'ヒアリング',
    description: '客様のご要望や目的、予算、期間などを詳しくお伺いします。',
    icon: FaComments,
    duration: '1-2日',
    aiRole: 'ヒアリング内容を分析し、最適なレイアウトパターンを提案',
    humanRole: '詳細なニーズの把握と提案'
  },
  {
    id: 2,
    title: 'デザイン設計',
    description: 'ヒアリング内容を基にデザインの方向性を決定し、ワイヤーフレームを作成します。',
    icon: FaPencilRuler,
    duration: '3-5日',
    aiRole: 'デザイン候補の自動生成',
    humanRole: 'デザインの調整とブラッシュアップ'
  },
  {
    id: 3,
    title: 'AI活用開発',
    description: '最新のAIツールを活用し、効率的にコードを生成します。',
    icon: FaRobot,
    duration: '5-7日',
    aiRole: 'コード生成と基本実装',
    humanRole: 'コードレビューと品質管理'
  },
  {
    id: 4,
    title: '実装・調整',
    description: '生成されたコードを最適化し、細かな調整を行います。',
    icon: FaCode,
    duration: '3-5日',
    aiRole: 'コード最適化の提案',
    humanRole: 'カスタマイズと機能調整'
  },
  {
    id: 5,
    title: '納品・運用開始',
    description: '最終確認を行い、サイトを公開します。必要に応て運用サポートも提供します。',
    icon: FaCheckCircle,
    duration: '1-2日',
    aiRole: '自動テストと品質チェック',
    humanRole: '最終確認と公開作業'
  }
];

const TechAndFlow = () => {
  return (
    <Section 
      id="tech"
      className="py-32 md:py-40"
      disableDefaultBackground
      fullWidth
    >
      <div className="relative">
        <Background />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              先進技術による<br className="sm:hidden" />実現
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              最新のWeb技術とAI技術を組み合わせることで、
              高品質で革新的なソリューションを提供します
            </p>
          </motion.div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <motion.h3
              {...fadeInUp}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              使用技術
            </motion.h3>
            <motion.div 
              {...staggerChildren()}
              className="grid md:grid-cols-3 gap-8"
            >
              {technologies.map((category, index) => (
                <Card
                  key={index}
                  variant="tech"
                  withHover
                  padding="large"
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{category.category}</h3>
                  <p className="text-gray-400 mb-8">{category.description}</p>
                  
                  <motion.div 
                    {...staggerChildren(0.1)}
                    className="space-y-6"
                  >
                    {category.techs.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        {...fadeInUp}
                        className="flex items-start gap-4 group"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          {tech.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                          <p className="text-gray-400 text-sm">{tech.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Flow Section */}
          <div>
            <motion.h3
              {...fadeInUp}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              制作フロー
            </motion.h3>
            <div className="grid gap-8">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    key={step.id}
                    variant="tech"
                    withHover
                    padding="large"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                          <step.icon className="w-8 h-8 text-blue-400/80" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-semibold text-white/90">
                            {step.id}. {step.title}
                          </h3>
                          <span className="text-blue-400/80 font-semibold mt-2 md:mt-0">
                            目安期間: {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-400/90 mb-4">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-500/20">
                            <h4 className="text-base font-semibold text-blue-400 mb-2">AIの役割</h4>
                            <p className="text-sm text-gray-300/90 leading-relaxed">{step.aiRole}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-500/20">
                            <h4 className="text-base font-semibold text-purple-400 mb-2">人間の役割</h4>
                            <p className="text-sm text-gray-300/90 leading-relaxed">{step.humanRole}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              ※ プロジェクトの規模や要件に応じて期間は変動します
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default TechAndFlow; 