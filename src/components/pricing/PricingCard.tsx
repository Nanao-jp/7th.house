"use client"

import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import Card from '@/components/ui/Card'
import { PricingPlan } from '@/constants/pricing'
import Button from '@/components/ui/Button'

interface PricingCardProps {
  plan: PricingPlan
  index: number
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact-title')
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card
        variant="pricing"
        withHover
        padding="large"
        className={`relative h-full flex flex-col ${
          plan.recommended ? 'border-2 border-purple-500' : ''
        }`}
      >
        {plan.recommended && (
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
              おすすめ
            </span>
          </div>
        )}
        <div className="text-center mb-8 flex-shrink-0">
          <h3 className="text-2xl font-bold text-white mb-2">
            {plan.name}
          </h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">{plan.description}</p>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-purple-400">
              ¥{plan.price}
            </span>
          </div>
        </div>
        <div className="flex-grow mb-8">
          <div className="space-y-3.5">
            {plan.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-start space-x-3"
              >
                <div className={`p-1 rounded-full bg-gradient-to-r ${plan.accent} flex-shrink-0 mt-0.5`}>
                  <FaCheck className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm md:text-base leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <Button
            href="#contact"
            variant="gradient"
            className="w-full py-3"
            onClick={handleContactClick}
          >
            お問い合わせ
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

export default PricingCard 