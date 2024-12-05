import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/constants/animations';
import Section from '@/components/ui/Section';
import LazyCard from '@/components/ui/LazyCard';
import { Background } from './TechStack/Background';
import { technologies } from '@/constants/techData';
import { flowSteps } from '@/constants/flowData';

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
              最新技術で実現する<br className="sm:hidden" />高品質なWeb開発
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              確かな技術力で、使いやすく高性能なWebサイトを実現します
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
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((category, index) => (
                <LazyCard
                  key={index}
                  variant="tech"
                  withHover
                  padding="large"
                  index={index}
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{category.category}</h3>
                  <p className="text-gray-400 mb-8">{category.description}</p>
                  
                  <motion.div 
                    {...staggerChildren(0.1)}
                    className="space-y-6"
                  >
                    {category.techs.map((tech, techIndex) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={techIndex}
                          {...fadeInUp}
                          className="flex items-start gap-4 group"
                        >
                          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                            <p className="text-gray-400 text-sm">{tech.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </LazyCard>
              ))}
            </div>
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
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <LazyCard
                    key={step.id}
                    variant="tech"
                    withHover
                    padding="large"
                    index={index}
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                          <Icon className="w-8 h-8 text-blue-400/80" />
                        </div>
                      </div>
                      <div className="flex-grow space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h3 className="text-xl font-semibold text-white">
                            {step.id}. {step.title}
                          </h3>
                          <span className="text-blue-400 font-semibold mt-1 md:mt-0">
                            目安期間: {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-400">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="rounded-lg bg-blue-500/10 p-4">
                            <h4 className="text-blue-400 font-semibold mb-2">AIの役割</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{step.aiRole}</p>
                          </div>
                          <div className="rounded-lg bg-purple-500/10 p-4">
                            <h4 className="text-purple-400 font-semibold mb-2">人間の役割</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{step.humanRole}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </LazyCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechAndFlow; 