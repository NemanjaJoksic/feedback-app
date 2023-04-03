import { createContext, useState } from 'react'
import feedbackData, { Feedback } from '../data/FeedbackData'

export type FeedbackContextType = {
  feedbacksAreLoading: boolean
  feedbacks: Array<Feedback>
  fetchFeedbacks: () => void
  addFeedback: (feedback: Feedback) => void
  deleteFeedback: (id: number) => void
}

export const FeedbackContext = createContext<FeedbackContextType | null>(null)

var nextFeedbackId = feedbackData.length + 1

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
    feedback.id = nextFeedbackId++
    console.log('Adding a feedback with ID ' + feedback.id)
    const newFeedbacks = [...feedbacks]
    newFeedbacks.push(feedback)
    setFeedbacks(newFeedbacks)
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
