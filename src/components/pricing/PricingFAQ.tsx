"use client"

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { faqData } from '@/constants/pricing'

const PricingFAQ = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-16 text-center"
    >
      <h3 className="text-2xl font-bold text-white mb-8">
        よくあるご質問
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {faqData.map((category, index) => (
          <Card
            key={index}
            variant="pricing"
            padding="large"
            className="bg-opacity-50 text-left"
          >
            <h4 className="text-lg font-bold text-white mb-4">
              {category.title}
            </h4>
            <div className="space-y-6 text-gray-400">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <p className="font-medium text-gray-300 mb-2">Q. {item.question}</p>
                  <p>A. {item.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}

export default PricingFAQ 