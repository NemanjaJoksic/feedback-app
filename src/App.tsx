import { useState } from "react";
import Header from "./components/Header";
import feedbackData, { Feedback } from "./data/FeedbackData";
import FeedbacksPage from "./pages/FeedbacksPage";
import AboutPage from "./pages/AboutPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData);

  const addFeedback = (feedback: Feedback) => {
    console.log("Adding a feedback with ID " + feedback.id);
    const newFeedbacks = [...feedbacks];
    newFeedbacks.push(feedback);
    setFeedbacks(newFeedbacks);
  };

  const deleteFeedback = (id: number) => {
    if (
      window.confirm(
        "Are you sure that you want to delete an item with id " + id
      )
    ) {
      console.log("Deleting feedback with ID " + id);
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <div className="container">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <FeedbacksPage
                feedbacks={feedbacks}
                addFeedback={addFeedback}
                deleteFeedback={deleteFeedback}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
