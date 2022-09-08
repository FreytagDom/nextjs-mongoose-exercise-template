import { getAllQuestions } from "../../services/questionService";
import { getQuestionById } from "../../services/questionService";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const questions = getAllQuestions();
  const question = await getQuestionById(id);

  return {
    porps: {
      questions,
      question,
    },
  };
}
