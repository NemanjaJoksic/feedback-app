import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { Feedback } from '../data/FeedbackData'
import Card from './shared/Card'
import {
  FeedbackContext,
  FeedbackContextType,
} from '../context/FeedbackContext'

type FeedbackItemProps = {
  feedback: Feedback
}

const FeedbackItem = (props: FeedbackItemProps) => {
  const { deleteFeedback } = useContext(FeedbackContext) as FeedbackContextType

  return (
    <Card>
      <div className='num-display'>{props.feedback.rating}</div>
      <button
        className='close'
        onClick={() => deleteFeedback(props.feedback.id)}
      >
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => {console.log('Editing feedback with ID ' + props.feedback.id)}}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{props.feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem
