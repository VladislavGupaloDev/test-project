import { createReduxStore } from './store'
import type { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export function StoreProvider({ children }: PropsWithChildren) {
  const store = createReduxStore()

  return (
    <Provider
      store={store}
      children={children}
    />
  )
}
