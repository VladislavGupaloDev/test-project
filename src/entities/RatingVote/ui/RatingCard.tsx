import type { ExtendRatingItem } from '@/entities/RatingVote/model/rating.slice'
import type { ReactNode } from 'react'

export function RatingCard({
  item,
  rating
}: {
  item: ExtendRatingItem
  rating: ReactNode
}) {
  return (
    <div className='flex h-full max-h-90 min-h-60 w-full items-center justify-center gap-4 overflow-hidden rounded-sm border border-zinc-50 bg-black p-4'>
      <div className='h-full w-2/6 overflow-hidden'>
        <img
          className='h-full shrink-0 object-contain'
          src={item.image}
          alt={item.title}
          role='img'
          tabIndex={0}
        />
      </div>
      <div className='flex h-full w-full flex-col'>
        <h2 className='text-center text-2xl font-semibold capitalize sm:text-3xl md:text-4xl'>
          {item.title}
        </h2>
        {rating}
      </div>
    </div>
  )
}
