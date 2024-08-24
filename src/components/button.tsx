import { ClassValue } from 'clsx'
import { MoveRight, Plus } from 'lucide-react'

import { cn } from '@/libs/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'default' | 'darker' | 'reversed' | 'darker-reversed'
  isLink?: boolean
  isCreate?: boolean
}

export function Button({
  variant = 'default',
  className,
  children,
  isCreate,
  isLink,
  ...props
}: ButtonProps) {
  let variantClass: ClassValue

  switch (variant) {
    case 'darker':
      variantClass = 'bg-orange-dark text-white'
      break
    case 'reversed':
      variantClass =
        'bg-transparent text-orange-base border-1 border-orange-base'
      break
    case 'darker-reversed':
      variantClass =
        'bg-transparent text-orange-dark border-1 border-orange-dark'
      break
    default:
      variantClass = 'bg-orange-base text-white'
      break
  }

  return (
    <button
      className={cn(
        variantClass,
        'transition-scale flex items-center rounded-xl px-3 py-4 font-medium duration-300 hover:scale-90',
        className,
      )}
      {...props}
    >
      <>
        {isCreate && <Plus className="mr-2" />}
        {children}
        {isLink && <MoveRight className="ml-auto" />}
      </>
    </button>
  )
}
