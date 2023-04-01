import { useContext } from "react";
import { Feedback } from "../data/FeedbackData";
import Card from "./shared/Card";
import { FeedbackContext, FeedbackContextType } from "../context/FeedbackContext";

type FeedbackItemProps = {
  feedback: Feedback
}

function FeedbackItem(props: FeedbackItemProps) {

  const { deleteFeedback } = useContext(FeedbackContext) as FeedbackContextType

  return (
    <Card>
      <div className="num-display">{props.feedback.rating}</div>
      <button
        className="close"
        onClick={() => deleteFeedback(props.feedback.id)}
      >
        x
      </button>
      <div className="text-display">{props.feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem
