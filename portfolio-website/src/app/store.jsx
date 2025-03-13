import { configureStore } from '@reduxjs/toolkit'
import AboutReducer from './aboutSlide'
import ServicesRedurcer from './servicesSlide'

export const store = configureStore({
  reducer: {
    about:AboutReducer,
    services:ServicesRedurcer
  },
})