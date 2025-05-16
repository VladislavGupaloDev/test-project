import { useState } from 'react'

//? Возможно лучше было положить с виджетом пагинации, но на будущее мех
export function usePagination(
  totalItems: number,
  limit: number,
  init?: number
) {
  const [page, setPage] = useState(init ?? 0)
  const maxPages = Math.ceil(totalItems / limit)
  const lastPage = page >= maxPages
  const cursors = { left: page * limit, right: page * limit + limit }
  return {
    cursors,
    page,
    setPage,
    lastPage,
    maxPages,
    next: () => setPage(prev => Math.min(prev + 1, maxPages)),
    prev: () => setPage(prev => Math.max(prev - 1, 0))
  }
}
