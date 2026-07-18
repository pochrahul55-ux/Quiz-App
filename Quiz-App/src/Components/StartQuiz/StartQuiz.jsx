import { useEffect, useRef } from "react";
import axios from "axios";

function decodeHTML(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

function formatQuestions(q) {
  const options = [...q.incorrect_answers, q.correct_answer].map(decodeHTML);
  const correctAnswerIndex = options.indexOf(decodeHTML(q.correct_answer));

  return {
    questions: decodeHTML(q.question),
    options,
    correctAnswerIndex,
  };
}

export default function StartQuiz({ category, difficulty, dispatch }) {
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!category || !difficulty) return;

    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchQuestions = async () => {
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`,
      );
      const formattedQuestions = res.data.results.map(formatQuestions);
      console.log(formattedQuestions);
      dispatch({ type: "questionsLoaded", payload: formattedQuestions });
      dispatch({ type: "startTimer" });
    };
    fetchQuestions();
  }, [category, difficulty, dispatch]);

  return <div>StartQuiz</div>;
}
