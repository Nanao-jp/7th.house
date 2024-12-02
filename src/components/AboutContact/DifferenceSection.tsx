import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { FaRocket } from 'react-icons/fa';
import Card from '@/components/ui/Card';

const strengths = [
  {
    icon: <FaBrain className="w-8 h-8 text-blue-400" />,
    title: 'AIエンジニアとしての専門性',
    description: 'OpenAI APIやGoogle Cloud AIなど、最新のAI技術を活用した開発経験が豊富です。効率的な開発プロセスと革新的なソリューションを提供します。',
    points: [
      'ChatGPT/LangChainを活用した開発',
      'AI機能の効率的な実装',
      'コスト効率の高いAI活用提案'
    ]
  },
  {
    icon: <HiLightningBolt className="w-8 h-8 text-yellow-400" />,
    title: '迅速な開発と柔軟な対応',
    description: '個人開発者として、意思決定から実装までのスピードが圧倒的に速く、お客様のニーズに合わせて柔軟に対応できます。',
    points: [
      '素早い意思決定と実装',
      '要件の柔軟な調整',
      '迅速なフィードバック対応'
    ]
  },
  {
    icon: <FaRocket className="w-8 h-8 text-purple-400" />,
    title: 'モダンな技術スタックの活用',
    description: 'Next.js、TypeScript、TailwindCSSなど、最新のWeb技術を駆使し、高パフォーマンスで保守性の高いアプリケーションを実現します。',
    points: [
      'SEO対策済みの高速サイト',
      'モバイルファーストの設計',
      'アクセシビリティ対応'
    ]
  },
];

const DifferenceSection = () => {
  return (
    <div className="grid gap-12">
      {strengths.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card
            variant="tech"
            withHover
            padding="large"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
              <ul className="mt-6 space-y-2">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-300 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default DifferenceSection; 