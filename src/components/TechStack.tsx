import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/constants/animations';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { Background } from './TechStack/Background';
import { technologies } from '@/constants/techData';

const TechStack = () => {
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
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{category.category}</h3>
                <p className="text-gray-400 mb-8">{category.description}</p>
                
                <div className="space-y-6">
                  {category.techs.map((tech, techIndex) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={techIndex}
                        className="flex items-start gap-4 group"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                          <p className="text-gray-400 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
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