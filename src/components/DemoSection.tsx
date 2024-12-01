'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import Section from '@/components/ui/Section';
import { ProposalForm, Industry, Feature, Atmosphere } from './DemoSection/ProposalForm';
import { ProposalDisplay, ProposalResponse } from './DemoSection/ProposalDisplay';
import { DemoDescription } from './DemoSection/DemoDescription';

const DemoSection = () => {
  const [industry, setIndustry] = useState<Industry>('飲食店');
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [atmosphere, setAtmosphere] = useState<Atmosphere | ''>('');
  const [showProposal, setShowProposal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [proposal, setProposal] = useState<ProposalResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

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
    <Section 
      id="demo"
      className="min-h-screen py-20"
      disableDefaultBackground
      fullWidth
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            あなたのビジネスに<br className="sm:hidden" />最適なウェブサイトを
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            業種や特徴を選択して、AIによる提案を体験してください
          </p>
        </motion.div>

        <ProposalForm
          industry={industry}
          setIndustry={setIndustry}
          selectedFeatures={selectedFeatures}
          toggleFeature={toggleFeature}
          atmosphere={atmosphere}
          setAtmosphere={setAtmosphere}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {showProposal && proposal && <ProposalDisplay proposal={proposal} />}
        {showProposal && proposal && <DemoDescription />}

        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default DemoSection; 