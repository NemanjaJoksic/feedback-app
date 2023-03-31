import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import { Feedback } from "../data/FeedbackData";
import { Link } from "react-router-dom";

type FeedbacksPageProps = {
  feedbacks: Array<Feedback>;
  addFeedback: (feedback: Feedback) => void;
  deleteFeedback: (id: number) => void;
};

function FeedbacksPage(props: FeedbacksPageProps) {
  return (
    <div>
      <FeedbackForm addFeedback={props.addFeedback} />
      <FeedbackStats feedbacks={props.feedbacks} />
      <FeedbackList
        feedbacks={props.feedbacks}
        deleteFeedback={props.deleteFeedback}
      />
      <div className="about-link">
        <Link to='/about'>Go To About Page</Link>
      </div>
    </div>
  );
}

export default FeedbacksPage;
