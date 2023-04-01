import { useState } from "react"
import Header from "./components/Header"
import feedbackData, { Feedback } from "./data/FeedbackData"
import FeedbacksPage from "./pages/FeedbacksPage"
import AboutPage from "./pages/AboutPage"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { FeedbackProvided } from "./context/FeedbackContext"

function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData)

  return (
    <div className="container">
      <FeedbackProvided>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<FeedbacksPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </FeedbackProvided>
    </div>
  )
}

export default App
