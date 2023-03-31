import React from "react";
import { Feedback } from "../data/FeedbackData";

type FeedbackStatsProps = {
  feedbacks: Array<Feedback>;
};

function FeedbackStats(props: FeedbackStatsProps) {
  const feedbacks = props.feedbacks;
  const averageRating =
    feedbacks.reduce((sum, current) => sum + current.rating, 0) /
    feedbacks.length;

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} reviews</h4>
      <h4>Average raiting: {averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;
