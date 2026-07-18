import { useEffect } from "react";
import "../../styles/Timer.css";

export default function Timer({ dispatch, timer }) {
  const mins = Math.floor(timer / 60);
  const secs = timer % 60;
  const isLow = timer < 30;

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [dispatch]);
  return (
    <div className={`timer ${isLow ? "timer-low" : ""}`}>
      {mins < 10 && 0}
      {mins}:{secs < 10 && 0}
      {secs}
    </div>
  );
}
