import { createContext, useState } from 'react'
import { Feedback } from '../model/Feedback'

export type FeedbackContextType = {
  feedbacksAreLoading: boolean
  feedbacks: Array<Feedback>
  fetchFeedbacks: () => void
  addFeedback: (feedback: Feedback) => void
  deleteFeedback: (id: number) => void
}

export const FeedbackContext = createContext<FeedbackContextType | null>(null)

export const FeedbackProvided = (props: React.PropsWithChildren) => {
  const [feedbacksAreLoading, setFeedbacksAreLoading] = useState(true)
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  const fetchFeedbacks = () => {
    fetch('/api/feedbacks')
      .then((response) => response.json())
      .then((feedbacks: Array<Feedback>) => {
        setFeedbacks(feedbacks)
        setFeedbacksAreLoading(false)
      })
  }

  const addFeedback = (feedback: Feedback) => {
    fetch('/api/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback),
    })
      .then(() => fetchFeedbacks())
      .then(() => setFeedbacksAreLoading(true))
  }

  const deleteFeedback = (id: number) => {
    if (
      window.confirm(
        'Are you sure that you want to delete an item with id ' + id
      )
    ) {
      console.log('Deleting feedback with ID ' + id)
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacksAreLoading,
        feedbacks,
        fetchFeedbacks,
        addFeedback,
        deleteFeedback,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}
