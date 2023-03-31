import { useState } from "react";
import { Feedback, nextFeedbackId } from "../data/FeedbackData";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

type FeedbackFormProps = {
  addFeedback: (feedback: Feedback) => void;
};

function FeedbackForm(props: FeedbackFormProps) {
  const [text, setText] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newTextValue = e.currentTarget.value;

    if (newTextValue === "") {
      setIsButtonDisabled(true);
      setMessage("");
    } else if (newTextValue.trim().length <= 5) {
      setIsButtonDisabled(true);
      setMessage("Review must have more 5 characters");
    } else {
      setIsButtonDisabled(false);
      setMessage("");
    }

    setText(newTextValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting feedback");

    props.addFeedback({ id: nextFeedbackId(), rating: rating, text: text });

    setText("");
    setIsButtonDisabled(true);
    setMessage("");
    setRating(10);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rating form</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write your review"
            value={text}
          />
          <Button isDisabled={isButtonDisabled}>Send</Button>
        </div>

        {message != "" && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
