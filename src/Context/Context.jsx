import React, { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

// import initialFeedback from "./db,json";

const Context = ({ children }) => {
  // const initialFeedback = [
  //   {
  //     id: 1,
  //     text: "hello world",
  //     rating: 3,
  //   },
  //   {
  //     id: 2,
  //     text: "text hello world",
  //     rating: 8,
  //   },
  //   {
  //     id: 3,
  //     text: " hello bye hello world",
  //     rating: 2,
  //   },
  // ];

  const [feedback, setFeedback] = useState([]);
  const [rating, setRating] = useState("");
  const [selected, setSelected] = useState("");
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    feedbackData();
  }, []);

  const feedbackData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/feedback?_sort=id&_order=desc"
      );

      const data = await response.json();
      // console.log(data);
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeCard = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/feedback/" + id, {
        method: "DELETE",
      });

      await response.json();
      setFeedback(feedback.filter((item) => item.id !== id));

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editCard = (id) => {
    // setFeedback(feedback.filter((item) => item.id !== id));

    // console.log(id);
    const item = feedback.find((item) => {
      return item.id === id;
    });

    // console.log(`* ~ file: Context.jsx:35 ~ editCard ~ item`, item);

    setText(item.text);
    setSelected(item.rating);
    setId(item.id);
    setIsEdit(true);
  };

  const averageRating = (
    feedback.reduce((acc, curr) => {
      return (acc += curr.rating);
    }, 0) / feedback.length
  ).toFixed(1);

  return (
    <AppContext.Provider
      value={{
        feedback,
        isLoading,
        setFeedback,
        rating,
        averageRating,
        setRating,
        selected,
        setSelected,
        text,
        setText,
        removeCard,
        editCard,
        isEdit,
        setIsEdit,
        id,
        setId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext };
