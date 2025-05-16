import { cn } from '../lib/helpers/cn'
import type { ComponentProps } from 'react'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'h-12 w-full animate-pulse rounded-md bg-zinc-200/20',
        className
      )}
      {...props}
    />
  )
}
