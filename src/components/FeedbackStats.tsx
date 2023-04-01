import { useContext } from 'react'
import {
  FeedbackContext,
  FeedbackContextType,
} from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedbacks } = useContext(FeedbackContext) as FeedbackContextType

  const averageRating =
    feedbacks.reduce((sum, current) => sum + current.rating, 0) /
    feedbacks.length

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} reviews</h4>
      <h4>Average raiting: {averageRating}</h4>
    </div>
  )
}

export default FeedbackStats
