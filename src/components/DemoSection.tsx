'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Industry = '飲食店' | 'アパレル' | '美容院' | '不動産' | '教育' | 'フィットネス' | '医療機関' | 'コンサルティング';
type Feature = 
  | '予約システム' 
  | 'ネットショップ' 
  | '情報発信ブログ' 
  | 'お問い合わせフォーム' 
  | 'SNS連携機能'
  | '会員専用ページ'
  | 'お知らせ配信'
  | '多言語切替';

type Atmosphere = 
  | 'シンプル重視' 
  | '機能重視' 
  | 'デザイン重視' 
  | 'コミュニケーション重視';

type ProposalResponse = {
  design: string;
  features: string[];
  aiStrengths: string[];
};

const DemoSection = () => {
  const [industry, setIndustry] = useState<Industry>('飲食店');
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [atmosphere, setAtmosphere] = useState<Atmosphere | ''>('');
  const [showProposal, setShowProposal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [proposal, setProposal] = useState<ProposalResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const industries: Industry[] = [
    '飲食店', 
    'アパレル', 
    '美容院', 
    '不動産', 
    '教育',
    'フィットネス',
    '医療機関',
    'コンサルティング'
  ];

  const features: Feature[] = [
    '予約システム',
    'ネットショップ',
    '情報発信ブログ',
    'お問い合わせフォーム',
    'SNS連携機能',
    '会員専用ページ',
    'お知らせ配信',
    '多言語切替'
  ];

  const atmospheres: Atmosphere[] = [
    'シンプル重視',
    '機能重視',
    'デザイン重視',
    'コミュニケーション重視'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          industry,
          features: selectedFeatures,
          atmosphere,
        }),
      });

      if (!response.ok) {
        throw new Error('提案の生成に失敗しました');
      }

      const data = await response.json();
      setProposal(data);
      setShowProposal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFeature = (feature: Feature) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            あなたのビジネスに<br className="sm:hidden" />最適なウェブサイトを
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            業種や特徴を選択して、AIによる提案を体験してください
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 業種選択 */}
            <div className="space-y-3">
              <label className="text-white text-lg font-medium block mb-4">業種</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value as Industry)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {industries.map(ind => (
                  <option key={ind} value={ind} className="text-gray-900">{ind}</option>
                ))}
              </select>
            </div>

            {/* 特徴選択 */}
            <div className="space-y-3">
              <label className="text-white text-lg font-medium block mb-4">必要な機能（複数選択可）</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {features.map(feature => (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => toggleFeature(feature)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${selectedFeatures.includes(feature)
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>

            {/* 雰囲気選択 */}
            <div className="space-y-3">
              <label className="text-white text-lg font-medium block mb-4">サイトの特徴</label>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {atmospheres.map(atm => (
                  <button
                    key={atm}
                    type="button"
                    onClick={() => setAtmosphere(atm)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${atmosphere === atm
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                  >
                    {atm}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !industry || !atmosphere || selectedFeatures.length === 0}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 mt-8"
            >
              {isLoading ? '提案を生成中...' : 'AIに提案してもらう'}
            </button>
          </form>

          {/* 提案表示エリア */}
          {showProposal && proposal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">AIからの提案</h3>
                <div className="space-y-8">
                  {/* レイアウトの提案 */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">レイアウトの提案</h4>
                    <div className="text-gray-300 space-y-4 whitespace-pre-line pl-4 border-l-2 border-blue-500">
                      {proposal.design}
                    </div>
                  </div>

                  {/* おすすめ機能 */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">おすすめ機能</h4>
                    <div className="text-gray-300 space-y-4 whitespace-pre-line pl-4 border-l-2 border-blue-500">
                      {proposal.features.join('\n')}
                    </div>
                  </div>

                  {/* AIによる強み */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">AIによる強み</h4>
                    <div className="text-gray-300 space-y-4 whitespace-pre-line pl-4 border-l-2 border-blue-500">
                      {proposal.aiStrengths.join('\n')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* デモの説明文を提案の後に移動 */}
          {showProposal && proposal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-4">【デモンストレーションについて】</h3>
              <div className="text-gray-300 space-y-4">
                <p>このデモンストレーションはAIによる提案機能の雰囲気を楽しんでいただくためのものです。</p>
                <p>実際のご依頼では経験豊富な技術者がより高性能なAIを使い、お客様のご要望に合わせて丁寧に制作させていただきます。</p>
                <p>まずはAIの提案機能を気軽にお試しいただき、ウェブサイト制作のイメージを膨らませていただければ幸いです！</p>
              </div>
            </motion.div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 