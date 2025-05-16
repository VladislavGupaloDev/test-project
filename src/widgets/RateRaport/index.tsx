import { cn } from '@/shared/lib/helpers/cn'
import type { ComponentProps } from 'react'

interface RateData {
  id: string
  title: string
  rate: number | null
}

export function RateRaport({
  data,
  className,
  ...props
}: ComponentProps<'ul'> & { data: RateData[] }) {
  return (
    <ul
      className={cn('flex flex-col', className)}
      {...props}
    >
      {data.map(item => (
        <li key={item.id}>
          {item.title}: <span>{item.rate ?? 'Оценка не задана'}</span>
        </li>
      ))}
      <li className='text-4xl font-bold opacity-10'>
        Хочу работать ヽ(o＾▽＾o)ノ
      </li>
    </ul>
  )
}
