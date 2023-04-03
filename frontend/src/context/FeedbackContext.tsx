import { createContext, useState } from 'react'
import { Feedback } from '../model/Feedback'

export type FeedbackContextType = {
  feedbacksAreLoading: boolean
  feedbacks: Array<Feedback>
  feedback: Feedback
  fetchFeedbacks: () => void
  addFeedback: (feedback: Feedback) => void
  deleteFeedback: (id: number) => void
  updateFeedback: (feedback: Feedback) => void
  loadFeedback: (feedback: Feedback) => void
}

export const FeedbackContext = createContext<FeedbackContextType | null>(null)

export const FeedbackProvided = (props: React.PropsWithChildren) => {
  const [feedbacksAreLoading, setFeedbacksAreLoading] = useState(true)
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [feedback, setFeedback] = useState({} as Feedback)

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
      .then(() => setFeedbacksAreLoading(true))
      .then(() => fetchFeedbacks())
  }

  const updateFeedback = (feedback: Feedback) => {
    fetch('/api/feedbacks/' + feedback.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback),
    })
      .then(() => setFeedbacksAreLoading(true))
      .then(() => fetchFeedbacks())
  }

  const deleteFeedback = (id: number) => {
    if (
      window.confirm(
        'Are you sure that you want to delete an item with id ' + id
      )
    ) {
      console.log('Deleting feedback with ID ' + id)
      fetch('/api/feedbacks/' + id, {
        method: 'DELETE',
      })
        .then(() => setFeedbacksAreLoading(true))
        .then(() => fetchFeedbacks())
    }
  }

  const loadFeedback = (feedback: Feedback) => {
    setFeedback(feedback)
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacksAreLoading,
        feedbacks,
        feedback,
        fetchFeedbacks,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        loadFeedback,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}
