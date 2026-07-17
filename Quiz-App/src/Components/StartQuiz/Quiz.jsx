import Options from "./Options";
import Question from "./Question";
import '../../styles/Quiz.css';

export default function Quiz({ questions, index }) {
  const question = questions[index]
  return (
    <div className="quiz">
      <Question question={question.questions} />
      <Options options={question.options} />
    </div>
  )
}
