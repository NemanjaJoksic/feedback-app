import React from "react";
import feedbackData, { Feedback } from "../data/FeedbackData";
import FeedbackItem from "./FeedbackItem";

type FeedbackListProps = {
  feedbacks: Array<Feedback>;
  deleteFeedback: (id: number) => void;
};

function FeedbackList(props: FeedbackListProps) {
  return (
    <div>
      {props.feedbacks.map((feedback) => (
        <FeedbackItem
          feedback={feedback}
          deleteFeedback={props.deleteFeedback}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
