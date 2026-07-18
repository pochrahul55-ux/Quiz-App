import "../../styles/RestartQuiz.css";

export default function RestartQuiz({ dispatch }) {
  return (
    <div>
      <button className="restart-quiz-button" onClick={() => dispatch({ type: "restartQuiz" })}>
        Restart Quiz
      </button>
    </div>
  );
}
