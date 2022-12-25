import React from "react";
import "./App.scss";
import { FaEdit, FaQuestion, FaTrash } from "react-icons/fa";

const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo">Service Experience</h1>
      </header>
      <main className="main">
        <section className="feedback__container">
          <article className="feedback__menu">
            <h2 className="feedback__title">
              How would you rate us with your service with us ?
            </h2>

            <article className=" btn--group">
              <button className=" btn--number">1</button>
              <button className=" btn--number">2</button>
              <button className=" btn--number">3</button>
              <button className=" btn--number">4</button>
              <button className=" btn--number">5</button>
              <button className=" btn--number">6</button>
              <button className=" btn--number">7</button>
              <button className=" btn--number">8</button>
              <button className=" btn--number">9</button>
              <button className=" btn--number">10</button>
            </article>

            <form onSubmit={(e) => e.preventDefault()} className="review">
              <input
                type="text"
                name="review__text"
                id="review__text"
                className="review__text"
                placeholder="write a review"
              />
              <button className="btn btn--send">send</button>
            </form>
          </article>
        </section>
        <section className="feedback__number">
          <h2 className="review__number">22 Reviews</h2>
          <h3 className="review__rating">Average Rating 3.37</h3>
        </section>
        <section className="card__container">
          <article className="card">
            <h2 className="card__text">write a review</h2>
            <div className="card__button__group">
              <button className="btn btn--edit">
                <FaEdit />
              </button>
              <button className="btn btn--delete">
                <FaTrash />
              </button>
            </div>
            <span className="card__rating">10</span>
          </article>
        </section>
      </main>
      <footer className="footer">
        <div className="question">
          <FaQuestion />
        </div>
      </footer>
    </>
  );
};

export default App;
