import { createSlice } from '@reduxjs/toolkit'

//action creator
const initialState = {
  username: ""
}

const textSlice = createSlice({
  name: 'textReducer',
  initialState,
  reducers:{
    textInput (state,action) {
        state.username = action.payload
    }
  }
})

export const {textInput} = textSlice.actions

export default textSlice.reducer