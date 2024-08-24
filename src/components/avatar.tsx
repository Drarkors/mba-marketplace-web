import * as AvatarRadix from '@radix-ui/react-avatar'

import { cn } from '@/libs/utils'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string
  fallback?: string
}

export function Avatar({ fallback, ...props }: AvatarProps) {
  return (
    <AvatarRadix.Root className="flex cursor-pointer items-center justify-center transition-all duration-500 hover:brightness-75">
      <AvatarRadix.Image {...props} />
      <AvatarRadix.Fallback
        className={cn(
          'rounded-full border-1 border-orange-base text-center text-lg font-semibold text-orange-base',
          props.className,
        )}
      >
        {fallback ?? '...'}
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
