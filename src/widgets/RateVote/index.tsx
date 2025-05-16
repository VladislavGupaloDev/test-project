import { RatingCard } from '@/entities/RatingVote'
import type { ExtendRatingItem } from '@/entities/RatingVote/model/rating.slice'
import { StarsRating } from '@/features/StarsRating'

//? Возможно лучше вообще импортировать тип, а прописать везде свой тип для независимости, для простоты так сделаю
export function RateVote({ data }: { data: ExtendRatingItem[] }) {
  return (
    <ul className='flex h-full flex-col gap-2 sm:gap-5'>
      {data.map(item => (
        <RatingCard
          key={item.id}
          item={item}
          rating={
            <StarsRating
              item={item}
              increaseCn='scale-110 fill-amber-300 stroke-amber-50 stroke-1'
              decreaseCn='scale-75 fill-amber-100'
              max={10}
              className='max-h-full md:h-full'
            />
          }
        />
      ))}
    </ul>
  )
}
