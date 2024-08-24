import { KeyRound, Mail, Phone, Plus, UserRound } from 'lucide-react'

import { cn } from '@/libs/utils'

export type AvailableIcons = 'mail' | 'password' | 'phone' | 'user' | 'plus'

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

  const className = cn('transition-colors duration-500', color, props.className)

  switch (icon) {
    case 'mail':
      return <Mail {...props} className={className} />
    case 'password':
      return <KeyRound {...props} className={className} />
    case 'phone':
      return <Phone {...props} className={className} />
    case 'user':
      return <UserRound {...props} className={className} />
    case 'plus':
      return <Plus {...props} className={className} />
  }
}
