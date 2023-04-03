import React, { useContext } from 'react'
import { FeedbackContext, FeedbackContextType } from '../context/FeedbackContext'

const RatingSelect = () => {
  const { feedback, loadFeedback } = useContext(FeedbackContext) as FeedbackContextType

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const selectedRating = e.currentTarget.value
    console.log('Rating selected ' + selectedRating)
    loadFeedback({... feedback, rating: +selectedRating})
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={feedback.rating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
