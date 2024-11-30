import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import Card from '@/components/ui/Card';

export interface ProposalResponse {
  design: string;
  features: string[];
  aiStrengths: string[];
}

interface ProposalDisplayProps {
  proposal: ProposalResponse;
}

export const ProposalDisplay: React.FC<ProposalDisplayProps> = ({ proposal }) => {
  return (
    <motion.div
      {...fadeInUp}
      className="mt-8"
    >
      <Card
        variant="tech"
        padding="large"
      >
        <h3 className="text-2xl font-bold text-white mb-8">AIからの提案</h3>
        <div className="space-y-8">
          {/* レイアウトの提案 */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">レイアウトの提案</h4>
            <div className="text-gray-300 space-y-4 whitespace-pre-line pl-4 border-l-2 border-blue-500/50 bg-blue-500/5 py-4 pr-4 rounded-r-lg">
              {proposal.design}
            </div>
          </div>

          {/* おすすめ機能 */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">おすすめ機能</h4>
            <div className="text-gray-300 space-y-4 whitespace-pre-line pl-4 border-l-2 border-purple-500/50 bg-purple-500/5 py-4 pr-4 rounded-r-lg">
              {proposal.features.join('\n')}
            </div>
          </div>

          {/* AIによる強み */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">AIによる強み</h4>
            <div className="text-gray-300 space-y-4 whitespace-pre-line pl-4 border-l-2 border-indigo-500/50 bg-indigo-500/5 py-4 pr-4 rounded-r-lg">
              {proposal.aiStrengths.join('\n')}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}; 