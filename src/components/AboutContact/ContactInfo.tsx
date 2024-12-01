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

export default ContactInfo; 