import FeedbackForm from '../components/FeedbackForm'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import { Link } from 'react-router-dom'

function FeedbacksPage() {
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <div className='about-link'>
        <Link to='/about'>Go To About Page</Link>
      </div>
    </div>
  )
}

export default FeedbacksPage
