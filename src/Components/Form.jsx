import React, { useEffect, useState } from "react";
import { useAppContext } from "../Context/Context";
import Rating from "./Rating";

const Form = () => {
  const {
    feedback,
    setFeedback,
    setMessage,
    setIsMessage,
    removeAlert,
    feedbackEdit,
    updateFeedback,
  } = useAppContext();

  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !rating) {
      setIsMessage(true);
      setMessage("Please enter valid text");
      removeAlert(false, "");
      return;
    }

    setIsMessage(true);
    setMessage("add review");
    removeAlert(false, "");

    const id = new Date().getTime().toString();
    const newFeedback = {
      text: text,
      id: id,
      rating: rating,
    };
    // console.log(
    //   `* ~ file: Form.jsx:16 ~ handleSubmit ~ newFeedback`,
    //   newFeedback
    // );

    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      setFeedback([...feedback, newFeedback]);
    }

    // console.log(feedback);

    setText("");
  };

  useEffect(() => {
    console.log(feedbackEdit);
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <>
      <section className="feedback__container">
        <article className="feedback__menu">
          <h2 className="feedback__title">
            How would you rate us with your service with us ?
          </h2>

          <form onSubmit={handleSubmit}>
            <Rating select={(i) => setRating(i)} />
            <section className="review">
              <input
                type="text"
                name="review__text"
                id="review__text"
                className="review__text"
                placeholder="write a review"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button className="btn btn--send">send</button>
            </section>
          </form>
        </article>
      </section>
    </>
  );
};

export default Form;
