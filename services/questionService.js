import dbConnect from "../dbConnect";
import Quiz from "../models/Quiz";

export async function getAllQuestions() {
  await dbConnect();
  console.log(dbConnect);
  const questions = await Quiz.find();

  const questionArray = questions.map(({ id, question, answer, options }) => {
    return { id, question, answer, options };
  });

  return questionArray;
}

export async function getQuestionById(questionId) {
  await dbConnect();

  const questions = await Quiz.findById(questionId);

  const { id, question, answer, options } = questions;

  return { id, question, answer, options };
}
