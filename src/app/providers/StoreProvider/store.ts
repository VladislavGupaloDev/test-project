import { rateSliceReducer } from '@/entities/RatingVote/model/rating.slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  rateData: rateSliceReducer
})

export type InitalState = Partial<RootState>
export const createReduxStore = (initialState?: InitalState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  })

type StoreType = ReturnType<typeof createReduxStore>
export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = StoreType['dispatch']
