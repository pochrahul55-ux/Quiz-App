import Options from "./Options";
import Question from "./Question";
import "../../styles/Quiz.css";

export default function Quiz({ questions, index, dispatch, userAnswer, numOfQuestions }) {
  const isAnswered = userAnswer === null;
  const question = questions[index];
  const displayNextBtn = index + 1 < numOfQuestions;
  const displayFinishBtn = index + 1 === numOfQuestions;

  return (
    <div className="quiz">
      <Question question={question.questions} />
      <Options
        options={question.options}
        index={index}
        dispatch={dispatch}
        userAnswer={userAnswer}
        correctAnswer={question.correctAnswerIndex}
      />

      {displayNextBtn && (
        <button
          className="next-button"
          onClick={() => dispatch({ type: "nextQuestion" })}
          disabled={isAnswered}
        >
          Next Question
        </button>
      )}
      {displayFinishBtn && (
        <button
          className="next-button"
          onClick={() => dispatch({ type: "finishQuiz" })}
          disabled={isAnswered}
        >
          Finish
        </button>
      )}
    </div>
  );
}
