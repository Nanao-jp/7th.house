import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import Card from '@/components/ui/Card';

export const DemoDescription = () => {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-8"
    >
      <Card
        variant="tech"
        padding="large"
        className="text-center"
      >
        <h3 className="text-xl font-bold text-white mb-4">【デモンストレーションについて】</h3>
        <div className="text-gray-300 space-y-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-lg p-6">
          <p>このデモンストレーションはAIによる提案機能の雰囲気を楽しんでいただくためのものです。</p>
          <p>実際のご依頼では経験豊富な技術者がより高性能なAIを使い、お客様のご要望に合わせて丁寧に制作させていただきます。</p>
          <p>まずはAIの提案機能を気軽にお試しいただき、ウェブサイト制作のイメージを膨らませていただければ幸いです！</p>
        </div>
      </Card>
    </motion.div>
  );
}; 