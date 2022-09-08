/**
 * Don't forget to add the function
 * `getServerSideProps`!
 */

import { getAllQuestions } from "../services/questionService";
import QuestionCard from "../src/QuestionCard";

export async function getServerSideProps() {
  const questions = await getAllQuestions();
  console.log(questions);
  return {
    props: {
      questions: questions,
    },
  };
}

export default function IndexPage({ questions }) {
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {questions.map(({ question, answer, options, id }) => {
          return (
            <QuestionCard
              key={id}
              question={question}
              answer={answer}
              options={options}
            />
          );
        })}
      </ul>
    </main>
  );
}
