import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/form/Select';

export type Industry = '飲食店' | 'アパレル' | '美容院' | '不動産' | '教育' | 'フィットネス' | '医療機関' | 'コンサルティング';
export type Feature = 
  | '予約システム' 
  | 'ネットショップ' 
  | '情報発信ブログ' 
  | 'お問い合わせフォーム' 
  | 'SNS連携機能'
  | '会員専用ページ'
  | 'お知らせ配信'
  | '多言語切替';

export type Atmosphere = 
  | 'シンプル重視' 
  | '機能重視' 
  | 'デザイン重視' 
  | 'コミュニケーション重視';

interface ProposalFormProps {
  industry: Industry;
  setIndustry: (industry: Industry) => void;
  selectedFeatures: Feature[];
  toggleFeature: (feature: Feature) => void;
  atmosphere: Atmosphere | '';
  setAtmosphere: (atmosphere: Atmosphere) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

const industries: Industry[] = [
  '飲食店', 'アパレル', '美容院', '不動産', '教育',
  'フィットネス', '医療機関', 'コンサルティング'
];

const features: Feature[] = [
  '予約システム', 'ネットショップ', '情報発信ブログ',
  'お問い合わせフォーム', 'SNS連携機能', '会員専用ページ',
  'お知らせ配信', '多言語切替'
];

const atmospheres: Atmosphere[] = [
  'シンプル重視', '機能重視', 'デザイン重視', 'コミュニケーション重視'
];

export const ProposalForm: React.FC<ProposalFormProps> = ({
  industry,
  setIndustry,
  selectedFeatures,
  toggleFeature,
  atmosphere,
  setAtmosphere,
  onSubmit,
  isLoading
}) => {
  const industryOptions = industries.map(ind => ({
    value: ind,
    label: ind
  }));

  return (
    <motion.div {...fadeInUp} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-2xl">
      <form onSubmit={onSubmit} className="space-y-8">
        {/* 業種選択 */}
        <Select
          label="業種"
          value={industry}
          onChange={(e) => setIndustry(e.target.value as Industry)}
          options={industryOptions}
          required
        />

        {/* 特徴選択 */}
        <div className="space-y-3">
          <label className="block text-white text-sm font-medium mb-4">
            必要な機能（複数選択可）
            <span className="text-red-500 ml-1">*</span>
          </label>
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
          <label className="block text-white text-sm font-medium mb-4">
            サイトの特徴
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div 
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3"
            role="group"
            aria-label="サイトの雰囲気選択"
          >
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
                aria-pressed={atmosphere === atm}
                aria-label={`${atm}を選択`}
              >
                {atm}
              </button>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          variant="gradient"
          disabled={isLoading || !industry || !atmosphere || selectedFeatures.length === 0}
          className="w-full py-4 px-6 mt-8 disabled:opacity-50"
        >
          {isLoading ? '提案を生成中...' : 'AIに提案してもらう'}
        </Button>
      </form>
    </motion.div>
  );
}; 