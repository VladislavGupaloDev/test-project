//* Этот компонент я бы тоже разбил на 3 части ProgressBar, Content, Progress
import { cn } from '../lib/helpers/cn'
import type { ComponentProps } from 'react'

//* Еще один контейнер обертка нужен, чтобы задавать паддинги в прогрессбаре

export function ProgressBar({
  value,
  className,
  ...props
}: { value: number } & ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative flex h-4 w-full overflow-hidden rounded-sm border border-zinc-100',
        className
      )}
      {...props}
    >
      <div className='flex flex-1 overflow-hidden rounded-sm'>
        <div
          className='h-full flex-1 rounded-sm bg-green-100 transition-all ease-in-out'
          style={{
            transform: `translateX(-${100 - Math.min(Math.max(value || 0, 0), 100)}%)`
          }}
        />
      </div>
    </div>
  )
}
