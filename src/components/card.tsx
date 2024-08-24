import { cn } from '@/libs/utils'

type CardProps = React.HTMLAttributes<HTMLDivElement>

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-4 rounded-lg bg-white p-3',
        className,
      )}
      {...props}
    />
  )
}

function CardBadge({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg bg-blue-light p-5 text-blue-dark',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement>

function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div
      className={cn(
        'mr-4 line-clamp-2 flex flex-1 flex-col justify-center text-wrap text-left',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h2
      className={cn(
        'h-fit font-dm-sans text-2xl font-bold text-gray-400',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

function CardDescription({
  children,
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn('text-start font-sans text-xs text-gray-300', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { Card, CardBadge, CardContent, CardTitle, CardDescription }
