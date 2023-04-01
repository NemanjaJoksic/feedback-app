import { createContext, useState } from 'react'
import feedbackData, { Feedback } from '../data/FeedbackData'

export type FeedbackContextType = {
  feedbacks: Array<Feedback>
  feedbackToEdit: Feedback|null,
  addFeedback: (feedback: Feedback) => void
  deleteFeedback: (id: number) => void
  loadFeedbackForEditing: (feedback: Feedback) => void
}

export const FeedbackContext = createContext<FeedbackContextType | null>(null)

var nextFeedbackId = feedbackData.length + 1

export const FeedbackProvided = (props: React.PropsWithChildren) => {
  const [feedbacks, setFeedbacks] = useState(feedbackData)
  const [feedbackToEdit, setFeedbackToEdit] = useState<Feedback|null>(null)

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

  const loadFeedbackForEditing = (feedback: Feedback) => {
    console.log("Feedback with ID " + feedback.id + " is loaded for editing")
    setFeedbackToEdit(feedback)
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackToEdit,
        addFeedback,
        deleteFeedback,
        loadFeedbackForEditing
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  )
}
