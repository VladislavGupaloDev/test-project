import { cn } from '../lib/helpers/cn'
import type { ComponentProps } from 'react'

export function Button({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'inline-flex h-9 w-full cursor-pointer items-center justify-center rounded-xl border border-zinc-600 px-4 py-4 font-semibold transition-all hover:bg-zinc-400/20 disabled:pointer-events-none disabled:opacity-80 [&_svg]:pointer-events-none',
        className
      )}
      {...props}
    />
  )
}
