import { configureStore } from '@reduxjs/toolkit'
import feedbackSlice from './feedbackSlice'

export default configureStore({
  reducer: feedbackSlice,
})