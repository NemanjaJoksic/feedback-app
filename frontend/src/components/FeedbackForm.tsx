import { useState, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import { Feedback } from '../model/Feedback'
import { useDispatch, useSelector } from 'react-redux'
import {
  createFeedback,
  getFeedback,
  loadFeedback,
  updateFeedback,
} from '../store/feedbackSlice'

const FeedbackForm = () => {
  const dispatch = useDispatch<any>()

  const feedback = useSelector(getFeedback)

  const [message, setMessage] = useState('')

  useEffect(() => {
    loadFeedback(dispatch, { text: '', rating: 10 } as Feedback)
  }, [])

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newTextValue = e.currentTarget.value

    if (newTextValue === '') {
      setMessage('')
    } else if (newTextValue.trim().length <= 5) {
      setMessage('Review must have more 5 characters')
    } else {
      setMessage('')
    }

    loadFeedback(dispatch, { ...feedback, text: newTextValue })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Submitting feedback')

    console.log(feedback.id)
    if (feedback.id === undefined) {
      createFeedback(dispatch, feedback)
    } else {
      updateFeedback(dispatch, feedback)
    }

    setMessage('')
  }

  const clearRatingForm = () => {
    loadFeedback(dispatch, { text: '', rating: 10 } as Feedback)
  }

  return (
    <div>
      <div className='container-right'>
        <button className='btn-clear' onClick={clearRatingForm}>
          Clear Rating Form
        </button>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>Rating form</h2>
          <RatingSelect />
          <div className='input-group'>
            <input
              type='text'
              onChange={handleTextChange}
              placeholder='Write your review'
              value={feedback.text}
            />
            <Button
              isDisabled={
                feedback.text !== undefined && feedback.text.length <= 5
              }
            >
              Send
            </Button>
          </div>
          {message != '' && <div className='message'>{message}</div>}
        </form>
      </Card>
    </div>
  )
}

export default FeedbackForm
