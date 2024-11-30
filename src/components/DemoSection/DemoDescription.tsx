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
          <p>このデモンストレーションはAIによる提案機能の一例です。</p>
          <p>実際のご依頼では、お客様の具体的なご要望をお伺いし、経験豊富な技術者がより詳細なレイアウトと機能をご提案させていただきます。</p>
          <div className="pt-4 border-t border-white/10">
            <p className="text-blue-300 font-medium">まずはお気軽にお問い合わせフォームからご相談ください。</p>
            <p>ご希望の機能や雰囲気をお伺いし、最適なウェブサイトをご提案させていただきます。</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-6"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors duration-300"
            >
              お問い合わせはこちら
            </a>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}; 