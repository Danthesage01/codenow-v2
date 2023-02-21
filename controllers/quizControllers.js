import Quiz from "../models/Quiz.js";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import randomizeElements from "../random.js";

const getAllQuizzes = async (req, res) => {
  const { difficulty, subject } = req.query;

  const queryObject = {};
  if (difficulty && difficulty !== "all") {
    queryObject.difficulty = difficulty;
  }
  if (subject && subject !== "all") {
    queryObject.subject = subject;
  }

  let result = Quiz.find(queryObject);

  let limit = Number(req.query.limit) || 25;
  if (limit > 25) {
    limit = 25;
  }

  const quizzes = await result;
  const randomizedQuizzes = randomizeElements(quizzes, quizzes.length).slice(
    0,
    limit
  );

  res
    .status(StatusCodes.OK)
    .json({
      count: randomizedQuizzes.length,
      quizzes: randomizedQuizzes,
      msg: "success",
    });
};

// GET SINGLE quiz
const getQuiz = async (req, res) => {
  const {
    params: { id: quizId },
  } = req;
  const quiz = await Quiz.findOne({
    _id: quizId,
  });

  if (!quiz) {
    throw new NotFoundError(`No quiz with id ${quizId}`);
  }
  res.status(StatusCodes.OK).json({ quiz });
};

// CREATE NEW quiz
const createQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.status(StatusCodes.CREATED).json({ quiz });
};

// UPDATE A quiz
const updateQuiz = async (req, res) => {
  const {
    body: { company, position },
    params: { id: quizId },
  } = req;

  if (company === "" || position === "") {
    throw new BadRequestError("Company or Position field cannot be empty");
  }
  const quiz = await Quiz.findByIdAndUpdate({ _id: quizId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!quiz) {
    throw new NotFoundError(`No quiz with id ${quizId}`);
  }
  res.status(StatusCodes.OK).json({ quiz });
};

// DELETE quiz
const deleteQuiz = async (req, res) => {
  const {
    user: { userId },
    params: { id: quizId },
  } = req;

  const quiz = await Quiz.findByIdAndRemove({
    _id: quizId,
    createdBy: userId,
  });
  if (!quiz) {
    throw new NotFoundError(`No quiz with id ${quizId}`);
  }
  res.status(StatusCodes.OK).json({
    msg: `quiz with ${quizId} created by ${req.user.name} removed successfully`,
  });
};

export { getAllQuizzes, getQuiz, createQuiz, updateQuiz, deleteQuiz };
