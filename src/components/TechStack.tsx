import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTailwindcss, SiOpenai, SiTypescript, SiPrisma } from 'react-icons/si';
import { FaDatabase, FaCloud, FaBrain } from 'react-icons/fa';
import { fadeInUp, staggerChildren } from '@/constants/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { Background } from './TechStack/Background';

const TechStack = () => {
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
          name: "Cloud AI",
          icon: <FaCloud className="w-8 h-8" />,
          description: "クラウドベースの推論"
        },
        {
          name: "Custom AI",
          icon: <FaBrain className="w-8 h-8" />,
          description: "独自のAIモデル開発"
        }
      ]
    }
  ];

  return (
    <Section 
      className="py-20"
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

          <motion.div 
            {...staggerChildren(0.1)}
            className="grid md:grid-cols-3 gap-8"
          >
            {technologies.map((category, index) => (
              <Card
                key={index}
                variant="tech"
                withHover
                padding="large"
                {...fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{category.category}</h3>
                <p className="text-gray-400 mb-8">{category.description}</p>
                
                <div className="space-y-6">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        {tech.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                        <p className="text-gray-400 text-sm">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              ※ プロジェクトの要件に応じて最適な技術を選定します
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack; 