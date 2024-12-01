import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaHandshake } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerChildren } from '@/constants/animations';

const skills = [
  'Next.js/React', 'TypeScript', 'TailwindCSS',
  'Node.js', 'Python', 'AWS/GCP',
  'AI/機械学習', 'UI/UXデザイン', 'アジャイル開発'
];

const values = [
  {
    icon: <FaCode className="w-6 h-6 text-blue-400" />,
    title: '技術への探求',
    description: '常に最新技術をキャッチアップし、最適なソリューションを提供します。',
  },
  {
    icon: <FaLightbulb className="w-6 h-6 text-yellow-400" />,
    title: '創造性と革新',
    description: 'AIと人間の創造性を組み合わせ、革新的なアプローチを実現します。',
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-green-400" />,
    title: '誠実なコミュニケーション',
    description: 'お客様との信頼関係を大切にし、透明性の高い開発を心がけます。',
  },
];

const CompanySection = () => {
  return (
    <motion.div {...staggerChildren()} className="space-y-16">
      {/* スキルセット */}
      <motion.div {...fadeInUp} className="text-center">
        <h3 className="text-2xl font-semibold text-white mb-8">スキルセット</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg px-4 py-3 text-gray-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ビジョン・価値観 */}
      <motion.div {...fadeInUp}>
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">ビジョン・価値観</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <Card
              key={index}
              variant="tech"
              withHover
              padding="large"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanySection; 