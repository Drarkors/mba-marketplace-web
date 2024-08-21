import { KeyRound, Mail } from 'lucide-react'

import { cn } from '@/libs/utils'

export type AvailableIcons = 'mail' | 'password'

export interface IconsProps extends React.SVGAttributes<SVGSVGElement> {
  icon: AvailableIcons
  hasFocus?: boolean
  hasError?: boolean
}

export function Icon({ icon, hasFocus, hasError, ...props }: IconsProps) {
  const color = hasError
    ? 'text-danger'
    : hasFocus
      ? 'text-orange-base'
      : 'text-gray-200'

  switch (icon) {
    case 'mail':
      return (
        <Mail
          {...props}
          className={cn(
            'transition-colors duration-500',
            color,
            props.className,
          )}
        />
      )
    case 'password':
      return (
        <KeyRound
          {...props}
          className={cn(
            'transition-colors duration-500',
            color,
            props.className,
          )}
        />
      )
  }
}
