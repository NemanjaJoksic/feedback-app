import { useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import FeedbackItem from './FeedbackItem'
import { useFeedbackStore } from '../store/FeedbackStore'

const FeedbackList = () => {
  const isLoading = useFeedbackStore((store) => store.isLoading)
  const feedbacks = useFeedbackStore((store) => store.feedbacks)
  const getAllFeedbacks = useFeedbackStore((store) => store.actions.getAll)

  useEffect(() => {
    getAllFeedbacks()
  }, [])

  if (isLoading) {
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
