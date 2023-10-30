import { FaTimes, FaEdit } from 'react-icons/fa'
import { Feedback } from '../model/Feedback'
import Card from './shared/Card'
import { useDispatch } from 'react-redux'
import { deleteFeedback, loadFeedback } from '../store/feedbackSlice'

type FeedbackItemProps = {
  feedback: Feedback
}

const FeedbackItem = (props: FeedbackItemProps) => {
  const dispatch = useDispatch<any>()

  const handleEditFeedback = () => {
    loadFeedback(dispatch, props.feedback)
  }

  const handleDeleteFeedback = () => {
    deleteFeedback(dispatch, props.feedback.id)
  }

  return (
    <Card>
      <div className='num-display'>{props.feedback.rating}</div>
      <button className='close' onClick={handleDeleteFeedback}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={handleEditFeedback}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{props.feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem
