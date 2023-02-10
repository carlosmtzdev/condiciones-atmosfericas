import {createSlice } from '@reduxjs/toolkit'

const initialState = []


export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.result = [...state.result, action.result]
    }
  }
})


export const { setData} = citySlice.actions

export default citySlice.reducer