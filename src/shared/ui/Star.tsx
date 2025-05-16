import { StarIcon } from '../assets/StarIcon'
import { cn } from '../lib/helpers/cn'
import type { ComponentProps } from 'react'

//* Можно было задать стиль и по data-attribute, но он имеет больше вес больше придется через important (-dx)
export function Star({
  className,
  choosed = false,
  ...props
}: ComponentProps<'button'> & {
  choosed?: boolean
}) {
  return (
    <button
      className='h-full cursor-pointer'
      {...props}
    >
      <StarIcon
        className={cn(
          'size-full hover:fill-amber-600',
          choosed && 'fill-amber-400',
          className
        )}
        data-star-choosed={choosed}
      />
    </button>
  )
}
