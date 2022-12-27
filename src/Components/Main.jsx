import React, { useState } from "react";
import { useAppContext } from "../Context/Context";
import Card from "./Card";
import Form from "./Form";

const Main = () => {
  const {
    feedback,

    isMessage,
    message,
    averageRating,
    removeCard,
  } = useAppContext();

  // console.log(
  //   `* ~ file: Main.jsx:33 ~ averageRating ~ averageRating`,
  //   averageRating
  // );

  return (
    <>
      <main className="main">
        <Form />
        <h2 className={`${isMessage ? "show__message" : "message"}`}>
          {message ? message : null}
        </h2>

        <section className="feedback__number">
          <h2 className="review__number">{feedback.length} Reviews</h2>
          <h3 className="review__rating">
            Average Rating : {isNaN(averageRating) ? 0 : averageRating}
          </h3>
        </section>
        <section className="card__container">
          {feedback.length == 0 || !feedback ? (
            <h2 className="no__feedback">No feedback yet</h2>
          ) : (
            feedback.map((item) => {
              return <Card key={item.id} {...item} removeCard={removeCard} />;
            })
          )}
        </section>
      </main>
    </>
  );
};

export default Main;
