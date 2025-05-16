import { Skeleton } from './Skeleton'
import type { ComponentProps } from 'react'

export function SkeletonGroup({
  length = 2,
  ...props
}: ComponentProps<typeof Skeleton> & { length?: number }) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <Skeleton
          key={index}
          {...props}
        />
      ))}
    </>
  )
}
