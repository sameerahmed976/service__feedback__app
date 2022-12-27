import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAppContext } from "../Context/Context";

const Card = ({ text, rating, id, removeCard }) => {
  const { editCard } = useAppContext();
  return (
    <>
      <article className="card">
        <h2 className="card__text">{text}</h2>
        <div className="card__button__group">
          <button className="btn btn--edit" onClick={() => editCard(id)}>
            <FaEdit />
          </button>
          <button className="btn btn--delete" onClick={() => removeCard(id)}>
            <FaTrash />
          </button>
        </div>
        <span className="card__rating">{rating}</span>
      </article>
    </>
  );
};

export default Card;
