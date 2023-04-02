import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About page for Feedback app</h1>
        <p>This is React app to leave you feedbacks</p>
        <p>Version: 1.0.5</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
