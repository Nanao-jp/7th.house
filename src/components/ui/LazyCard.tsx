import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import { viewportConfig } from '@/constants/viewport';
import Card from './Card';
import { ReactNode } from 'react';

export interface LazyCardProps {
  index?: number;
  children: ReactNode;
  variant?: 'default' | 'feature' | 'tech' | 'interactive' | 'pricing';
  padding?: 'none' | 'small' | 'medium' | 'large';
  withHover?: boolean;
  withBorder?: boolean;
  blur?: boolean;
  className?: string;
}

const LazyCard = ({ 
  children, 
  index = 0, 
  className,
  ...props 
}: LazyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ 
        duration: 0.3,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      <Card {...props}>
        {children}
      </Card>
    </motion.div>
  );
};

export default LazyCard; 