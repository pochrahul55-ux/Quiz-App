export default function RestartQuiz({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "restartQuiz" })}>Restart Quiz</button>
    </div>
  );
}
