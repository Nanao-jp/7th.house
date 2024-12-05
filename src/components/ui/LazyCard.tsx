import { motion, useInView } from 'framer-motion';
import Card from './Card';
import { fadeInUp } from '@/constants/animations';
import { useRef } from 'react';

interface LazyCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'tech';
  withHover?: boolean;
  padding?: 'default' | 'large';
  className?: string;
  index?: number;
}

const LazyCard = ({ 
  children, 
  index = 0,
  ...props 
}: LazyCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "10% 0px",
    amount: 0.1
  });

  return (
    <div ref={ref} className="min-h-[100px]">
      {inView && (
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card {...props}>
            {children}
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default LazyCard; 