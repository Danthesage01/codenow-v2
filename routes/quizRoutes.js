import express from "express";
const router = express.Router();

import { getAllQuizzes } from "../controllers/quizControllers.js";

router.route("/").get(getAllQuizzes);

export default router;
