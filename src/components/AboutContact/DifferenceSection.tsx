import { motion } from 'framer-motion';
import { FaRobot, FaUserTie, FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerChildren } from '@/constants/animations';

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
    <motion.div
      {...staggerChildren()}
      className="grid gap-12"
    >
      {strengths.map((item, index) => (
        <Card
          key={index}
          variant="tech"
          withHover
          padding="large"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4">
            <div className="flex-shrink-0">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                {item.icon}
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + pointIndex * 0.1 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </motion.div>
  );
};

export default DifferenceSection; 