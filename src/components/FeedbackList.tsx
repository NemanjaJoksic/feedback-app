import React, { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import {
  FeedbackContext,
  FeedbackContextType,
} from "../context/FeedbackContext"

function FeedbackList() {
  
  const { feedbacks } = useContext(FeedbackContext) as FeedbackContextType

  return (
    <div>
      {feedbacks.map((feedback) => (
        <FeedbackItem feedback={feedback} />
      ))}
    </div>
  )
}

export default FeedbackList
