import { cn } from '../lib/helpers/cn'
import type { ComponentProps } from 'react'

export function Separator({
  className,
  orientation = 'vertical',
  ...props
}: ComponentProps<'div'> & { orientation?: 'vertical' | 'horizontal' }) {
  return (
    <div
      aria-label='разделитель'
      className={cn(
        'flex shrink-0 bg-zinc-100',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
}
