import React from 'react'
import { useQuizGlobalContext } from '../../context/quizContext/quizContext'
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
const Modal = () => {
  const {isQuizModal,  closeModal, quizTotal, quiz, score, index, checkCorrection, setNewQuiz } = useQuizGlobalContext()
  return (
    <>
      {checkCorrection ? (
        <div
          className={
            isQuizModal ? "modal-container isOpen " : " modal-container"
          }
        >
          <div className="modal-content">
            <h2>Take another quiz</h2>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.hero}
              className="close-btn"
              onClick={() => setNewQuiz({ quizTotal, quiz, index, score })}
            >
              Start Now
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={
            isQuizModal ? "modal-container isOpen " : " modal-container"
          }
        >
          <div className="modal-content">
            <h2>congrats</h2>
            <p>
              You answered of {((score / quizTotal) * 100).toFixed(0)}%
              Questions correctly
            </p>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.hero}
              className="close-btn"
              onClick={() => closeModal({ quizTotal, quiz, index, score })}
            >
              Check Corrections
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal