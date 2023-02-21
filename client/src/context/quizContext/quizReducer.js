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

const quizReducer = (state, action) => {
  switch (action.type) {
    case GET_QUIZ_BEGIN:
      return { ...state, isQuizLoading: true, isQuizWaiting: false };
    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        isQuizLoading: false,
        quiz: action.payload.massagedQuest,
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
      let newInIndex = inIndex + 1;
      if (newInIndex >= quizTotal - 1) {
        newInIndex = quizTotal - 1;
      }
      return {
        ...state,
        index: newInIndex,
        checkDisable: false,
      };

    case CLICK_ANSWER:
        const { isCorrect, score } = action.payload;
      let newScore = score;
      if (isCorrect) {
        newScore += 1;
      }

      return {
        ...state,
        userAnswer: action.payload.answerID,
        checkDisable: true,
        score: newScore,
      };
    case CHECK_ANSWER:
      const qTotal = action.payload.quizT;
      const iIndex = action.payload.index;
      const openModal = action.payload.openModal;
      if (iIndex + 1 === qTotal) {
        openModal();
      }
      return {
        ...state,
      };
    case OPEN_MODAL:
      return { ...state, isQuizModal: true };

    case CLOSE_MODAL:
      return {
        ...state,
        isQuizModal: false,
        checkCorrection: true,
      };

    case SHOW_CORRECTIONS:
      let deIndex = action.payload.index;
      deIndex = 0;
      return {
        ...state,
        index: deIndex,
      };

    case SET_NEW_QUIZ:
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
        checkDisable: false,
        checkCorrection: false,
      };
      return {
        ...state,
        ...initialState,
      };
    default:
      throw new Error(`No such action : ${action.type}`);
  }
};

export default quizReducer;
