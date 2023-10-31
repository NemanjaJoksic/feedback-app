import { useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import FeedbackItem from './FeedbackItem'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchFeedbacks,
  getFeedbacks,
  getIsLoading,
} from '../store/feedbackSlice'

const FeedbackList = () => {
  const dispatch = useDispatch<any>()

  const isLoading = useSelector(getIsLoading)
  const feedbacks = useSelector(getFeedbacks)

  useEffect(() => {
    dispatch(fetchFeedbacks())
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
