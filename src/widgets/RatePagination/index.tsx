import { Button } from '@/shared/ui/Button'
import { ProgressBar } from '@/shared/ui/ProgressBar'
import { Separator } from '@/shared/ui/Separator'
import type { ReactNode } from 'react'

//* Опять же я бы все это разбил на Compound

interface RatePaginationProps {
  prev: () => void
  next: () => void
  progress: number
  disablePrev?: boolean
  disableNext?: boolean
  prevContent?: ReactNode
  nextContent?: ReactNode
}

export function RatePagination({
  prev,
  next,
  progress,
  disableNext = false,
  disablePrev = false,
  nextContent,
  prevContent
}: RatePaginationProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-1 sm:flex-row'>
      <Button
        className='order-1 flex-1/4 rounded-sm text-xl'
        onClick={prev}
        disabled={disablePrev}
      >
        {prevContent ?? 'Назад'}
      </Button>
      <ProgressBar
        value={+progress}
        className='order-0 h-4 sm:order-2 sm:h-full sm:flex-3/4 sm:p-0.5'
      />
      <Separator
        orientation='vertical'
        className='hidden sm:visible'
      />
      <Button
        className='order-3 flex-1/4 rounded-sm text-xl'
        onClick={next}
        disabled={disableNext}
      >
        {nextContent ?? 'Вперед'}
      </Button>
    </div>
  )
}
