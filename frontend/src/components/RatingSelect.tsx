import { useDispatch, useSelector } from 'react-redux'
import { getFeedback, loadFeedback } from '../store/feedbackSlice'

const RatingSelect = () => {
  const dispatch = useDispatch<any>()

  const feedback = useSelector(getFeedback)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const selectedRating = e.currentTarget.value
    console.log('Rating selected ' + selectedRating)
    loadFeedback(dispatch, {... feedback, rating: +selectedRating})
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
