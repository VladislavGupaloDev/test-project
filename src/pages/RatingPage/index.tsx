import response from '@/db.json'
import { StarsRating } from '@/feature/StarsRating/ui/StarsRating'
import { Button } from '@/shared/ui/Button'
import { ProgressBar } from '@/shared/ui/ProgressBar'
import { Separator } from '@/shared/ui/Separator'
import { useState } from 'react'

export function RatingPage() {
  const [data, setData] = useState(response.data)
  const [page, setPage] = useState(0)
  const limit = 2
  const maxPages = data.length / limit
  const progressPercent = (((page * limit) / data.length) * 100).toFixed()
  console.log(progressPercent)
  return (
    <div className='container flex h-full w-full flex-col gap-3 p-5'>
      <div className='flex justify-center border px-4 py-2'>
        <h1 className='font-semibold'>
          Оцените, пожалуйста, насколько Вам нравится вкус каждой из марок
          шоколадных батончиков
        </h1>
      </div>
      <div className='flex h-full flex-col gap-2 sm:gap-5'>
        {data.slice(page * limit, page * limit + limit).map(item => (
          <div
            key={item.title}
            className='flex max-h-50 min-h-45 w-full items-center justify-center gap-4 overflow-hidden rounded-sm border border-zinc-50 bg-black p-4 xl:max-h-55 2xl:max-h-60'
          >
            <img
              className='h-full shrink-0 object-cover'
              src={item.image}
              alt={item.title}
              role='img'
              tabIndex={0}
            />
            <div className='flex h-full max-w-full flex-1 flex-col'>
              <h2 className='text-center text-2xl font-semibold capitalize sm:text-3xl md:text-4xl'>
                {item.title}
              </h2>
              <StarsRating
                increaseCn='scale-110 fill-amber-300 stroke-amber-50 stroke-1'
                decreaseCn='scale-75 fill-amber-100'
                max={10}
                className='max-h-full md:h-full'
              />
            </div>
          </div>
        ))}

        <div className='flex flex-col items-center justify-center gap-2 p-1 sm:flex-row'>
          <ProgressBar
            value={+progressPercent}
            className='h-4 sm:h-full sm:flex-3/4 sm:p-0.5'
          />
          <Separator
            orientation='vertical'
            className='hidden sm:visible'
          />
          <Button
            className='flex-1/4 rounded-sm text-xl'
            onClick={() => setPage(prev => prev + 1)}
            disabled={page >= maxPages - 1}
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  )
}
