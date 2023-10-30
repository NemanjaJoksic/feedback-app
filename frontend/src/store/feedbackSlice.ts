import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Feedback } from '../model/Feedback'

export type FeedbacksState = {
  feedbacks: Feedback[]
  feedback: Feedback
  isLoading: boolean
}

const initialFeedbacksState = {
  feedbacks: [],
  feedback: {} as Feedback,
  isLoading: true,
} as FeedbacksState

const feedbacksSlice = createSlice({
  name: 'feedback',
  initialState: initialFeedbacksState,
  reducers: {
    startLoading: (state: FeedbacksState) => {
      state.isLoading = true
      state.feedbacks = []
    },
    setFeedbacks: (
      state: FeedbacksState,
      action: PayloadAction<Feedback[]>
    ) => {
      state.isLoading = false
      state.feedbacks = action.payload
    },
    setFeedback: (state: FeedbacksState, action: PayloadAction<Feedback>) => {
      state.feedback = action.payload
    },
  },
})

export const fetchFeedbacks = async (dispatch: any) => {
  dispatch(feedbacksSlice.actions.startLoading())

  const response = await fetch('/api/feedbacks')
  const feedbacks = (await response.json()) as Feedback[]

  dispatch(feedbacksSlice.actions.setFeedbacks(feedbacks))
}

export const loadFeedback = (dispatch: any, feedback: Feedback) => {
  dispatch(feedbacksSlice.actions.setFeedback(feedback))
}

export const createFeedback = async (dispatch: any, feedback: Feedback) => {
  await fetch('/api/feedbacks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback),
  })

  loadFeedback(dispatch, { text: '', rating: 10 } as Feedback)
  fetchFeedbacks(dispatch)
}

export const updateFeedback = async (dispatch: any, feedback: Feedback) => {
  await fetch('/api/feedbacks/' + feedback.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback),
  })

  fetchFeedbacks(dispatch)
}

export const deleteFeedback = async (dispatch: any, id: number) => {
  if (
    window.confirm('Are you sure that you want to delete an item with id ' + id)
  ) {
    console.log('Deleting feedback with ID ' + id)
    await fetch('/api/feedbacks/' + id, {
      method: 'DELETE',
    })

    loadFeedback(dispatch, { text: '', rating: 10 } as Feedback)
    fetchFeedbacks(dispatch)
  }
}

export const getIsLoading = (state: FeedbacksState) => state.isLoading
export const getFeedbacks = (state: FeedbacksState) => state.feedbacks
export const getFeedback = (state: FeedbacksState) => state.feedback

export default feedbacksSlice.reducer
