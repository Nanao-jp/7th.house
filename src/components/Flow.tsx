import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaPencilRuler, FaRobot, FaCode, FaCheckCircle } from 'react-icons/fa';

const flowSteps = [
  {
    id: 1,
    title: 'ヒアリング',
    description: 'お客様のご要望や目的、予算、期間などを詳しくお伺いします。',
    icon: FaComments,
    duration: '1-2日',
    aiRole: 'チャットボットによる初期ヒアリングサポート',
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
    description: '最終確認を行い、サイトを公開します。必要に応じて運用サポートも提供します。',
    icon: FaCheckCircle,
    duration: '1-2日',
    aiRole: '自動テストと品質チェック',
    humanRole: '最終確認と公開作業'
  }
];

const Flow = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">制作フロー</h2>
          <p className="text-gray-600">AIと人間の強みを活かした効率的な開発プロセス</p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0">
                      {step.id}. {step.title}
                    </h3>
                    <span className="text-blue-600 font-semibold">
                      目安期間: {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">AIの役割</h4>
                      <p className="text-gray-600">{step.aiRole}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">人間の役割</h4>
                      <p className="text-gray-600">{step.humanRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow; 