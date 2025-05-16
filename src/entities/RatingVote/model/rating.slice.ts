import type { RootState } from '@/app/providers/StoreProvider/store'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface RatingItem {
  id: string
  title: string
  rate: number | null
}

//? Правильнее будет типом )
export interface ExtendRatingItem extends RatingItem {
  image: string
}

export interface RatingsResponse {
  data: ExtendRatingItem[]
}

const initialState: RatingsResponse = { data: [] }

export const rateSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRateData(state, action: PayloadAction<RatingsResponse>) {
      return action.payload
    },
    setRate: (
      state,
      action: PayloadAction<{ id: string; rate: number | null }>
    ) => {
      const index = state.data.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.data[index].rate = action.payload.rate
      }
    }
  }
})

export const { setRateData, setRate } = rateSlice.actions

export const selectRates = (state: RootState) => state.rateData.data

export const rateSliceReducer = rateSlice.reducer
