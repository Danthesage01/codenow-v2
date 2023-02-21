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

const featureReducer = (state, action) => {
  switch (action.type) {
    case GET_QUIZ_BEGIN:
      return { ...state, isQuizLoading: true, isQuizWaiting: false };
    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        isQuizLoading: false,
        quiz: action.payload.quizzes,
        quizTotal: action.payload.count,
        isQuizWaiting: false,
      };
    case GET_QUIZ_ERROR:
      return {
        ...state,
        isQuizLoading: false,
        isQuizWaiting: true,
        isQuizError: true,
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case INCREMENT_INDEX:
      const quizTotal = action.payload.quizT;
      const inIndex = action.payload.index;
      const openModal = action.payload.openModal;
      let newInIndex = inIndex + 1;
      if (newInIndex >= quizTotal - 1) {
        newInIndex = quizTotal - 1;
        // openModal();
      }
      return {
        ...state,
        index: newInIndex,
      };
    case DECREMENT_INDEX:
      const deIndex = action.payload.index;
      let newDeIndex = deIndex - 1;
      if (newDeIndex < 0) {
        newDeIndex = 0;
      }
      return {
        ...state,
        index: newDeIndex,
      };
    case CORRECT_ANSWER:
      let correct = action.payload.correct;
      let correct_answer = action.payload.correct_answer;
      let answer = action.payload.answer;
      if (correct_answer === answer )  {
        correct = correct + 1;
      }
      return { ...state, correct: correct };
    case OPEN_MODAL:
      return { ...state, isQuizModal: true, };
    case CLOSE_MODAL:
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
      return {
        ...state,
        ...initialState,
        isQuizModal: false,
        isQuizWaiting: true,
        correct: 0,
        quiz: [],
        quizTotal: 0,
      };
    default:
      throw new Error(`No such action : ${action.type}`);
  }
};

export default featureReducer;
