import React, { useContext, createContext, useReducer } from "react";
import featureReducer from "./featureReducer";
import axios from "axios";
import {
  GET_QUIZ_BEGIN,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_ERROR,
  HANDLE_CHANGE,
  INCREMENT_INDEX,
  DECREMENT_INDEX,
  CORRECT_ANSWER,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "./featureActions";

const FeatureContext = createContext();

const initialState = {
  isQuizLoading: false,
  difficultyOptions: ["easy", "medium", "hard"],
  difficulty: "all",
  subjectOptions: ["html", "css", "js", "react", "git"],
  subject: "all",
  quiz: [],
  quizTotal: 0,
  limit: 20,
  isQuizWaiting: true,
  index: 0,
  correct: 0,
  isQuizError: false,
  isQuizModal: false,
};
const url = "/api/v1/quiz";

const FeatureProvider = ({ children }) => {
  const [state, dispatch] = useReducer(featureReducer, initialState);

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const fetchQuiz = async (formQuery) => {
    dispatch({ type: GET_QUIZ_BEGIN });
    const { difficulty, subject, limit } = formQuery;
    try {
      const { data } = await axios.get(
        `${url}?limit=${limit}&subject=${subject}&difficulty=${difficulty}`
      );
      const { count, quizzes } = data;
      dispatch({ type: GET_QUIZ_SUCCESS, payload: { quizzes, count } });
    } catch (error) {
      dispatch({
        type: GET_QUIZ_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const nextQuiz = (index, quizT) => {
    dispatch({ type: INCREMENT_INDEX, payload: { index, quizT, openModal } });
  };
  const prevQuiz = (index) => {
    dispatch({ type: DECREMENT_INDEX, payload: { index } });
    console.log(index);
  };

  const checkAnswer = (correct_answer, answer, correct, index, quizTotal) => {
    dispatch({
      type: CORRECT_ANSWER,
      payload: { correct, correct_answer, answer },
    });
    if(correct >= quizTotal - 1){
      openModal()
    }
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
    // console.log(initialState.isQuizModal);
  };
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  return (
    <FeatureContext.Provider
      value={{
        ...state,
        fetchQuiz,
        handleChange,
        nextQuiz,
        prevQuiz,
        checkAnswer,
        openModal,
        closeModal,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};
export default FeatureProvider;

export const useFeatureGlobalContext = () => {
  return useContext(FeatureContext);
};
