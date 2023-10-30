import { useSelector } from 'react-redux'
import { getFeedbacks } from '../store/feedbackSlice'

const FeedbackStats = () => {
  const feedbacks = useSelector(getFeedbacks)

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
