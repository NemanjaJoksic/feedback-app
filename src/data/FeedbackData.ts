export type Feedback = {
  id: number;
  rating: number;
  text: string;
};

var lastFeedbackId = 0;

export function nextFeedbackId() {
  lastFeedbackId = lastFeedbackId + 1;
  return lastFeedbackId;
}

const feedbackData: Array<Feedback> = [
  {
    id: nextFeedbackId(),
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: nextFeedbackId(),
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: nextFeedbackId(),
    rating: 8,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
];

export default feedbackData;
