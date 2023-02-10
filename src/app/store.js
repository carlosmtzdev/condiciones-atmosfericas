import {configureStore } from '@reduxjs/toolkit'

import { citySlice } from '../reducers/citySlice'

export const store = configureStore({
  reducer: {
    city: citySlice
  }
}) 
