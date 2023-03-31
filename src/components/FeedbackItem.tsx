import { Feedback } from "../data/FeedbackData";
import Card from "./shared/Card";

type FeedbackItemProps = {
  feedback: Feedback;
  deleteFeedback: (id: number) => void;
};

function FeedbackItem(props: FeedbackItemProps) {
  return (
    <Card>
      <div className="num-display">{props.feedback.rating}</div>
      <button
        className="close"
        onClick={() => props.deleteFeedback(props.feedback.id)}
      >
        x
      </button>
      <div className="text-display">{props.feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
