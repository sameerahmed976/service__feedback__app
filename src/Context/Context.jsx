import React, { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
const Context = ({ children }) => {
  const initialFeedback = [
    {
      id: 1,
      text: "hello world",
      rating: 3,
    },
    {
      id: 2,
      text: "text hello world",
      rating: 8,
    },
    {
      id: 3,
      text: " hello bye hello world",
      rating: 2,
    },
  ];
  const [feedback, setFeedback] = useState(initialFeedback);
  const [edit, setEdit] = useState(false);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);

  const removeAlert = (msg, value) => {
    setTimeout(() => {
      setIsMessage(msg);
      setMessage(value);
    }, 1000);
  };

  const removeCard = (id) => {
    // console.log(id);

    setFeedback(feedback.filter((item) => item.id !== id));
    setIsMessage(true);
    setMessage("review deleted");

    removeAlert(false, "");
  };
  const editCard = (id) => {
    // console.log(id);

    setFeedbackEdit({
      item: feedback.find((item) => item.id === id),
      edit: true,
    });

    // console.log(feedbackEdit);

    // setFeedback(feedback.filter((item) => item.id !== id));
    setIsMessage(true);
    setMessage("review edited");

    removeAlert(false, "");
  };

  const averageRating = (
    feedback.reduce((acc, curr) => {
      return (acc += curr.rating);
    }, 0) / feedback.length
  ).toFixed(1);

  const updateFeedback = (id, updateItem) => {
    // console.log(`* ~ file: Context.jsx:72 ~ updateFeedback ~ id`, id);
    // console.log(
    //   `* ~ file: Context.jsx:72 ~ updateFeedback ~ updateItem`,
    //   updateItem
    // );

    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updateItem } : item;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        feedback,
        setFeedback,
        setMessage,
        setIsMessage,
        removeAlert,
        isMessage,
        message,
        averageRating,
        removeCard,
        editCard,
        feedbackEdit,
        updateFeedback,
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
