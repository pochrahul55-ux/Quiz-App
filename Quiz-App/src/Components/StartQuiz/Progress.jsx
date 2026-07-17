import "../../styles/Progress.css";

export default function Progress({ numOfQuestions, index, points, maxPoints }) {
  return (
    <div className="progress-container">
      <progress className="progress-bar" max={numOfQuestions} value={index}></progress>
      <div className="progress-text">
        <p>
          Question {index + 1} / {numOfQuestions}
        </p>
        <p>
          {points} / {maxPoints} points
        </p>
      </div>
    </div>
  );
}
