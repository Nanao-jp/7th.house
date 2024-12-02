'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import DifferenceSection from './DifferenceSection';
import ContactForm from './ContactForm';

const AboutContact = () => {
  return (
    <Section
      id="contact"
      className="pt-20 pb-4"
      disableDefaultBackground
      fullWidth
    >
      <div className="relative">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16 pt-12 md:pt-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              個人開発者だからこそ<br className="sm:hidden" />実現できる価値
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              AIと人間の強みを組み合わせた、柔軟で効率的な開発サービス
            </p>
          </motion.div>

          <div className="space-y-24">
            <DifferenceSection />
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutContact; 