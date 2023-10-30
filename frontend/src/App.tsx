import Header from './components/Header'
import FeedbacksPage from './pages/FeedbacksPage'
import AboutPage from './pages/AboutPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<FeedbacksPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
