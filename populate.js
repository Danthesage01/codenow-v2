import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import Quiz from "./models/Quiz.js";
import {readFile} from "fs/promises"
// import mock_data from "./mock_data.json";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    const jsonQuizzes = JSON.parse(await readFile(new URL("./mock_data.json", import.meta.url)))
   // await Quiz.deleteMany();
    await Quiz.create(jsonQuizzes);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
