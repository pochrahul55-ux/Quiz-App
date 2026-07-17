import { useEffect, useState } from "react";
import "../../styles/FinishQuiz.css";

export default function FinishQuiz({ points, maxPoints, scorePercentage }) {
  const [displayedPoints, setDisplayedPoints] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(points / 30);
    const interval = setInterval(() => {
      start += step;
      if (start >= points) {
        setDisplayedPoints(points);
        clearInterval(interval);
      } else {
        setDisplayedPoints(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [points]);

  return (
    <div className="finish-quiz">
      <p className="finish-quiz-eyebrow">Quiz complete</p>
      <p className="finish-quiz-score">
        You Scored: {displayedPoints}
        <span className="finish-quiz-max"> / {maxPoints}</span>
      </p>
      <p className="finish-quiz-percent">{scorePercentage}% correct</p>
    </div>
  );
}
