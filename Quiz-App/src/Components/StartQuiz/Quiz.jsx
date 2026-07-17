import Options from "./Options";
import Question from "./Question";
import '../../styles/Quiz.css';

export default function Quiz({ questions, index, dispatch, userAnswer }) {
  const isAnswered = userAnswer === null;
  const question = questions[index];

  return (
    <div className="quiz">
      <Question question={question.questions} />
      <Options options={question.options} index={index} dispatch={dispatch} userAnswer={userAnswer} correctAnswer={question.correctAnswerIndex} />
      <button
        className="next-button"
        onClick={() => dispatch({ type: 'nextQuestion' })}
        disabled={isAnswered}
      >Next Question
      </button>
    </div>
  )
}
