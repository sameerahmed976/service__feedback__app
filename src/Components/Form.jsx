import React, { useEffect, useState } from "react";
import { useAppContext } from "../Context/Context";
import Rating from "./Rating";

const Form = () => {
  const {
    feedback,
    setFeedback,
    rating,
    setRating,
    text,
    setText,
    setSelected,
    isEdit,
    id,
    isLoading,
    setId,
    setIsEdit,
  } = useAppContext();

  const addFeedback = async (newFeedback) => {
    try {
      const response = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      const data = await response.json();

      // console.log(data);
      setFeedback([data, ...feedback]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCard = async (item, id) => {
    // console.log(
    //   `* ~ file: Form.jsx:41 ~ updateCard ~ updateItem`,
    //   item,
    //   typeof id
    // );
    const itemSingle = item.find((i) => {
      return i.id === id;
    });

    try {
      const response = await fetch("http://localhost:3000/feedback/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemSingle),
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault();

    // console.log(text === !text);

    if (text === "" || !rating) {
      alert("enter text and select rating");
      return;
    } else if (isEdit) {
      console.log("edit");

      const newFeedback = feedback.map((item) => {
        if (item.id === id) {
          return { ...item, text: text, rating: rating };
        }
        return item;
      });
      console.log(
        `* ~ file: Form.jsx:75 ~ newFeedback ~ newFeedback`,
        newFeedback
      );
      setFeedback(newFeedback);
      updateCard(newFeedback, id);

      // console.log(feedback);
      setText("");
      setSelected("");
      setId("");
      setIsEdit(false);
    } else {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      addFeedback(newFeedback);

      setText("");
      setSelected("");
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
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
