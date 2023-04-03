import { useContext, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import FeedbackItem from './FeedbackItem'
import {
  FeedbackContext,
  FeedbackContextType,
} from '../context/FeedbackContext'

const FeedbackList = () => {
  const { feedbacksAreLoading, feedbacks, fetchFeedbacks } = useContext(
    FeedbackContext
  ) as FeedbackContextType

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  if (feedbacksAreLoading) {
    return (
      <div className='spinner'>
        <FaSpinner size='30' />
      </div>
    )
  } else {
    return (
      <div>
        {feedbacks.map((feedback) => (
          <FeedbackItem feedback={feedback} />
        ))}
      </div>
    )
  }
}

export default FeedbackList
