import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaPencilRuler, FaRobot, FaCode, FaCheckCircle, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFramer, SiPrisma, SiOpenai } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
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
        description: "美しいデザインの実現"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              先進技術による<br className="sm:hidden" />実現
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              最新のWeb技術とAIを組み合わせることで、
              高品質で革新的なソリューションを提供します
            </p>
          </motion.div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card variant="tech" withHover>
                    <h3 className="text-xl font-semibold text-white/90 mb-2">{tech.category}</h3>
                    <p className="text-gray-400/90 mb-6">{tech.description}</p>
                    <div className="space-y-4">
                      {tech.techs.map((item) => (
                        <div key={item.name} className="flex items-center space-x-3">
                          <div className="text-blue-400/80">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-white/90 font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-400/90">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flow Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              開発フロー
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              AIと人間のそれぞれの強みを活かした効率的な開発プロセス
            </p>
          </motion.div>

          <div className="grid gap-8">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <step.icon className="w-8 h-8 text-blue-400/80" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white/90 mb-2">{step.title}</h3>
                    <p className="text-gray-400/90 mb-4">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-blue-400 mb-1">AI</h4>
                        <p className="text-sm text-gray-400/90">{step.aiRole}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-purple-400 mb-1">Human</h4>
                        <p className="text-sm text-gray-400/90">{step.humanRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechAndFlow; 