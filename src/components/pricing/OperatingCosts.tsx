"use client"

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { fadeInUp } from '@/constants/animations'

const OperatingCosts = () => {
  return (
    <motion.div 
      {...fadeInUp} 
      className="mt-12 text-center"
    >
      <Card
        variant="pricing"
        padding="large"
        className="bg-opacity-50"
      >
        <h3 className="text-xl font-bold text-white mb-4">
          運営費用（年間）
        </h3>
        <div className="space-y-4 text-gray-400">
          <div>
            <ul className="mt-2 space-y-2">
              <li>・インフラ費用：2万円（サーバー・ドメイン）</li>
              <li>・運用費用：1万円（更新・管理）</li>
            </ul>
          </div>
          <div className="pt-2 border-t border-gray-700">
            <p>※自社運用の場合は運用費用が不要になります</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default OperatingCosts 