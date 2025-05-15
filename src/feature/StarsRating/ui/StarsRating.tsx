import { cn } from '@/shared/lib/helpers/cn'
import { Button } from '@/shared/ui/Button'
import { Star } from '@/shared/ui/Star'
import { type ComponentProps, useState } from 'react'

//* Это можно было разделить на render props(с передачей просто функции компонента, чтобы вешать на компонент, handler автоматический внутри) или compound подход с ContextAPI и разделением на два провайдера, состояния и сеттеров (рассуждения без редакса)

interface StarsRatingProps extends ComponentProps<'div'> {
  max?: number
  increaseCn?: string
  decreaseCn?: string
}

export function StarsRating({
  max = 10,
  increaseCn,
  decreaseCn,
  className,
  ...props
}: StarsRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [rate, setRate] = useState<number | null>(null)

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    value: number
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setRate(value)
    }
  }

  const items = Array.from({ length: max }, (_, index) => index + 1)
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center md:gap-0',
        className
      )}
      {...props}
    >
      <div
        className='flex h-full w-9/10 items-center justify-center'
        role='radiogroup'
        aria-label='Оцените вкус'
        onMouseLeave={() => setHovered(null)}
      >
        <div className='flex h-2/3'>
          {items.map(value => {
            //? Не думаю что это приемлимо
            //TODO: Пересмотреть на чистую голову
            const hover = hovered ?? 0
            const rated = rate ?? 0
            const isDecrese =
              hovered !== null && value <= rated && value > hover
            const isIncrese = hover >= rated && value <= hover && value > rated
            return (
              <Star
                choosed={value <= rated}
                key={value}
                role='radio'
                className={cn(
                  isIncrese && increaseCn,
                  isDecrese && decreaseCn,
                  'transition-all'
                )}
                aria-checked={rate === value}
                aria-label={`${value} звезд`}
                onClick={() => setRate(value)}
                onMouseEnter={() => setHovered(value)}
                onFocus={() => setHovered(value)}
                onBlur={() => setHovered(null)}
                onKeyDown={e => handleKeyDown(e, value)}
              />
            )
          })}
        </div>
      </div>
      <div className='flex shrink-0 justify-center'>
        <Button
          className='h-12 text-xl max-[500px]:text-sm'
          onClick={() => setRate(null)}
        >
          Затрудняюсь ответить
        </Button>
      </div>
    </div>
  )
}
