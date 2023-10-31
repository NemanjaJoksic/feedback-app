import { FaTimes, FaEdit } from 'react-icons/fa'
import { Feedback } from '../model/Feedback'
import Card from './shared/Card'
import { useFeedbackStore } from '../store/FeedbackStore'

type FeedbackItemProps = {
  feedback: Feedback
}

const FeedbackItem = (props: FeedbackItemProps) => {
  const deleteFeedback = useFeedbackStore((store) => store.actions.delete)
  const loadFeedback = useFeedbackStore((store) => store.actions.load)

  const handleEditFeedback = () => {
    loadFeedback(props.feedback)
  }

  const handleDeleteFeedback = (id: number) => {
    if (
      window.confirm(
        'Are you sure that you want to delete an item with id ' + id
      )
    ) {
      console.log('Deleting feedback with ID ' + id)
      deleteFeedback(id)
    }
  }

  return (
    <Card>
      <div className='num-display'>{props.feedback.rating}</div>
      <button
        className='close'
        onClick={() => handleDeleteFeedback(props.feedback.id)}
      >
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
