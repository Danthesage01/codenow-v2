import mongoose from "mongoose"

const QuizSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please provide question"],
    },
    incorrect_answers: {
      type: [String],
      required: [true, ["Please provide incorrect answers"]],
    },
    correct_answer: {
      type: String,
      required: [true, "Please provide correct answer"],
    },
    subject: {
      type: String,
      required: [true, "Please provide subject"],
      enum: ["html", "css", "js", "react", "git"],
      default: "html",
    },
    difficulty: {
      type: String,
      required: [true, "Please provide difficulty level"],
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", QuizSchema)