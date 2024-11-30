import { LabelHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

const Label = ({ 
  children, 
  className,
  required,
  ...props 
}: LabelProps) => {
  return (
    <label
      className={twMerge(
        'block text-sm font-medium text-gray-200 mb-1',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}

export default Label 