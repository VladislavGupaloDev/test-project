import {
  useAppDispatch,
  useAppSelector
} from '@/app/providers/StoreProvider/hooks'
import {
  selectRates,
  setRateData
} from '@/entities/RatingVote/model/rating.slice'
import { usePagination } from '@/shared/lib/hooks/usePaginated'
import { SkeletonGroup } from '@/shared/ui/SkeletonGroup'
import { RatePagination } from '@/widgets/RatePagination'
import { RateRaport } from '@/widgets/RateRaport'
import { RateVote } from '@/widgets/RateVote'
import { useEffect, useState } from 'react'

export function RatingPage() {
  const ratings = useAppSelector(selectRates)
  const [isLoading, setIsLoading] = useState(true)
  const [raport, setRaport] = useState(false)
  const { cursors, lastPage, next, prev, page } = usePagination(
    ratings.length - 1,
    2
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/db.json')
        dispatch(setRateData(await response.json()))
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [dispatch])

  const progressPercent = !raport
    ? ((cursors.left / ratings.length) * 100).toFixed()
    : 100
  const nextStepHandle = () => {
    if (raport) {
      submit()
    }
    if (lastPage) {
      setRaport(true)
      return
    }
    next()
  }
  const prevStepHandle = () => {
    if (raport) {
      setRaport(false)
      return
    }
    prev()
  }
  const submit = () => {
    console.log(ratings)
  }

  const paginated = ratings.slice(cursors.left, cursors.right)

  return (
    <div className='container flex h-full w-full flex-col gap-3 p-5'>
      <div className='flex justify-center border px-4 py-2'>
        <h1 className='font-semibold'>
          Оцените, пожалуйста, насколько Вам нравится вкус каждой из марок
          шоколадных батончиков
        </h1>
      </div>
      {isLoading ? (
        <div className='flex h-full flex-col gap-2 sm:gap-5'>
          <SkeletonGroup className='h-full max-h-90 min-h-60 w-full rounded-sm' />
        </div>
      ) : !raport ? (
        <RateVote data={paginated} />
      ) : (
        <RateRaport
          data={ratings}
          className='flex-1'
        />
      )}
      <RatePagination
        prev={prevStepHandle}
        next={nextStepHandle}
        disablePrev={page === 0 || isLoading}
        disableNext={isLoading}
        progress={+progressPercent}
        nextContent={raport ? 'Отправить' : 'Далее'}
      />
    </div>
  )
}
