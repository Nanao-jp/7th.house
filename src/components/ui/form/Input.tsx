"use client"

import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  required?: boolean
}

const Input = ({ 
  className,
  error,
  label,
  required,
  ...props 
}: InputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-white mb-2 text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        className={twMerge(
          'w-full px-4 py-2 bg-white/5 text-white rounded-lg border transition-colors focus:outline-none focus:ring-2',
          error 
            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
            : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default Input 