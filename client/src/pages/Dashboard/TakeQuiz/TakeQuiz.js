import React from "react";
import { useQuizGlobalContext } from "../../../context/quizContext/quizContext";
import {
  Wrapper,
  H3,
  Div,
  H4,
  Form,
  UpdateForm,
  FormCenter,
  QuizBody,
  QuizBTNWrap,
  QuizH4,
  QuizFormCenter,
} from "./TakeQuizStyles";
import Button, { BUTTON_TYPE_CLASSES } from "../../../components/Button/Button";
import DashFormRow from "../../../components/DashFormRow/DasFormRow";
import DashFormSelect from "../../../components/DashFormSelect/DashFormSelect";
import Modal from "../../../components/Modal/Modal";

const TakeQuiz = () => {
  const {
    quizTotal,
    quiz,
    fetchQuiz,
    isQuizLoading,
    subject,
    subjectOptions,
    difficulty,
    difficultyOptions,
    handleChange,
    limit,
    isQuizWaiting,
    index,
    score,
    nextQuiz,
    checkAnswer,
    clickAnswer,
    userAnswer,
    checkDisable,
    checkCorrection,
  } = useQuizGlobalContext();

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    handleChange({ name, value });
  };

  const handleFetchQuiz = (e) => {
    e.preventDefault();
    const formQuery = { subject, difficulty, limit };
    fetchQuiz(formQuery);
  };

  const question = quiz[index]?.question;
  const answers = quiz[index]?.answers || [];

  if (isQuizWaiting) {
    return (
      <Wrapper>
        <H3>Quiz</H3>
        <Div>
          <Form>
            <H4>Set Quiz</H4>
            <FormCenter>
              <DashFormRow
                htmlFor="limit"
                labelText="Number Of Questions 1-20"
                type="number"
                id="limit"
                name="limit"
                value={limit < 1 || limit > 20 ? 20 : limit}
                onChange={handleQuizChange}
                required="required"
              />

              <DashFormSelect
                labelText="Subject"
                name="subject"
                value={subject}
                handleChange={handleQuizChange}
                list={["all", ...subjectOptions]}
              />

              <DashFormSelect
                labelText="Difficulty"
                name="difficulty"
                value={difficulty}
                handleChange={handleQuizChange}
                list={["all", ...difficultyOptions]}
              />
            </FormCenter>
          </Form>
          <UpdateForm>
            <Button
              type="submit"
              className="btn-center"
              buttonType={BUTTON_TYPE_CLASSES.dash}
              onClick={handleFetchQuiz}
            >
              Start Quiz
            </Button>
          </UpdateForm>
        </Div>
      </Wrapper>
    );
  }
  if (isQuizLoading) {
    return (
      <Wrapper>
        <Div>
          <H4>Loading...</H4>
        </Div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <H3>Q{index + 1}</H3>
      <Modal />
      <Div>
        <QuizBody>
          <QuizFormCenter>
            <QuizH4>{question}</QuizH4>
            {checkCorrection
              ? answers.map((allItems) => {
                  const { id: answerID, isCorrect, answer } = allItems;
                  return (
                    <button
                      key={answerID}
                      type="button"
                      className="btn"
                      style={{ background: isCorrect ? "#6EC38C" : "#842029" }}
                    >
                      {answer}
                    </button>
                  );
                })
              : answers.map((allItems) => {
                  const { id: answerID, isCorrect, answer } = allItems;
                  return (
                    <button
                      key={answerID}
                      type="button"
                      disabled={checkDisable}
                      className={
                        userAnswer === answerID ? "btn user-answer" : "btn"
                      }
                      onClick={() =>
                        clickAnswer({
                          isCorrect,
                          answerID,
                          score,
                        })
                      }
                    >
                      {answer}
                    </button>
                  );
                })}
          </QuizFormCenter>
        </QuizBody>
        <QuizBTNWrap>
          {index + 1 !== quiz.length ? (
            <Button
              type="button"
              className="btn-center"
              buttonType={BUTTON_TYPE_CLASSES.dash}
              onClick={() => nextQuiz(index, quizTotal)}
            >
              {checkCorrection ? "next" : "next question"}
            </Button>
          ) : (
            <Button
              type="button"
              className="btn-center"
              buttonType={BUTTON_TYPE_CLASSES.dash}
              onClick={() => checkAnswer(index, quizTotal)}
            >
              {checkCorrection ? "End" : "submit"}
            </Button>
          )}
        </QuizBTNWrap>
      </Div>
    </Wrapper>
  );
};

export default TakeQuiz;
