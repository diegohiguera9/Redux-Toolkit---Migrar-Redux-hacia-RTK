import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

const countSlice = createSlice({
  name: 'countReduce',
  initialState,
  reducers: {
    countIncrement(state,action){
      state.count = state.count+1
    },
    countDecrement(state,action){
      state.count = state.count -1
    }
  }
})

export const {countIncrement,countDecrement} = countSlice.actions
export default countSlice.reducer