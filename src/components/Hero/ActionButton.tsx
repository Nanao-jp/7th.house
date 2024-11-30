"use client"

import Button from '@/components/ui/Button'

const ActionButton = () => {
  return (
    <Button
      href="#demonstration"
      variant="gradient"
      className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-medium"
    >
      <span>AIの実力を体験する</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </Button>
  )
}

export default ActionButton 