import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import { FaEnvelope, FaXTwitter } from 'react-icons/fa6';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-white mb-3">運営者情報</h4>
        <div className="space-y-4 text-gray-300">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4">
            <h3 className="text-2xl font-bold text-white mb-2">7th.House</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-400">代表：Nanao</p>
              <p className="text-sm text-blue-400">フルスタックエンジニア / Webデザイナー</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="leading-relaxed">
              Webデザイナーとしての経験を活かしつつ、フロントエンドからバックエンドまで一貫した開発を行っています。
            </p>
          </div>
          <div className="text-sm">
            <p className="font-medium text-white mb-2">得意分野：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>AIを活用したWebアプリケーション開発</li>
              <li>React/Next.jsでのフロントエンド実装</li>
              <li>使いやすさを重視したUIデザイン</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-white mb-3">事業内容</h4>
        <ul className="text-gray-300 space-y-2">
          <li>Webアプリケーション開発</li>
          <li>AI機能の実装・導入支援</li>
          <li>UI/UXデザイン</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-white mb-3">連絡先</h4>
        <div className="space-y-3">
          <a 
            href="mailto:contact@7th-house.net" 
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />
            <span>contact@7th-house.net</span>
          </a>
          <a 
            href="https://twitter.com/Nanao_AI_Engr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaXTwitter className="w-5 h-5" />
            <span>@Nanao_AI_Engr</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="max-w-6xl mx-auto pb-12 md:pb-16"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* お問い合わせフォーム */}
        <div>
          <div className="text-center md:text-left mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">お問い合わせ</h3>
            <p className="text-gray-300">
              お気軽にご相談ください。プロジェクトの規模や予算に関わらず、最適なソリューションをご提案いたます。
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ご相談内容をご記入ください"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                送信する
              </button>
            </div>
          </form>
        </div>

        {/* 会社情報 */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10">
          <ContactInfo />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm; 