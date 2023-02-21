import React, { useContext, createContext, useReducer } from "react";
import axios from "axios";
import {
  GET_QUIZ_BEGIN,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_ERROR,
  HANDLE_CHANGE,
  INCREMENT_INDEX,
  OPEN_MODAL,
  CLOSE_MODAL,
  CHECK_ANSWER,
  CLICK_ANSWER,
  SHOW_CORRECTIONS,
  SET_NEW_QUIZ,

} from "./quizActions";
import { nanoid } from "nanoid";

import quizReducer from "./quizReducer";
const QuizContext = createContext();

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
  score: 0,
  isQuizError: false,
  isQuizModal: false,
  localIsHeld: false,
  userAnswer: "",
  checkDisable: false,
  clicked: false,
  checkCorrection: false,
};

const url = "/api/v1/quiz";

// Quiz Provider
const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

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
      const massagedQuest = quizzes.map((quests) => {
        const incorrect = quests.incorrect_answers.map((answer) => {
          return { id: nanoid(), answer, isHeld: false, isCorrect: false };
        });
        const correct = {
          id: nanoid(),
          answer: quests.correct_answer,
          isHeld: false,
          isCorrect: true,
        };
        const answers = [...incorrect];
        const random = Math.floor(Math.random() * 4);
        answers.splice(random, 0, correct);

        return { ...quests, answers };
      });
      dispatch({ type: GET_QUIZ_SUCCESS, payload: { massagedQuest, count } });
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

  const correctionQuiz = (index) => {
    dispatch({ type: SHOW_CORRECTIONS, payload: { index } });
  };
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  const closeModal = ({ index }) => {
    dispatch({ type: CLOSE_MODAL });
    correctionQuiz(index);
  };
  const setNewQuiz = () => {
    dispatch({ type: SET_NEW_QUIZ });
  };

  const clickAnswer = ({ answerID, isCorrect, score }) => {
    dispatch({ type: CLICK_ANSWER, payload: { answerID, isCorrect, score } });
  };
  const checkAnswer = (index, quizT) => {
    dispatch({ type: CHECK_ANSWER, payload: { index, quizT, openModal } });
  };
  return (
    <QuizContext.Provider
      value={{
        ...state,
        fetchQuiz,
        handleChange,
        nextQuiz,
        closeModal,
        clickAnswer,
        checkAnswer,
        setNewQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
export default QuizProvider;

export const useQuizGlobalContext = () => {
  return useContext(QuizContext);
};
