import "./App.css";
import StartScreen from "./Components/LandingPage/StartScreen";
import Hero from "./Components/LandingPage/Hero";
import { useReducer } from "react";
import Selection from "./Components/SelectionPage/Selection";
import StartQuiz from "./Components/StartQuiz/StartQuiz";
import Quiz from "./Components/StartQuiz/Quiz";
import Progress from "./Components/StartQuiz/Progress";
import FinishQuiz from "./Components/FinishQuiz/FinishQuiz";

const initialState = {
  questions: [],
  status: "loading",
  category: null,
  difficulty: null,
  index: 0,
  userAnswer: null,
  points: 0,
};

const ANSWER_POINTS = 10;

function reducer(state, action) {
  switch (action.type) {
    case "startQuiz":
      return { ...state, status: "selection" };
    case "begin":
      return {
        ...state,
        status: "loadingQuestions",
        category: action.payload.category,
        difficulty: action.payload.difficulty,
      };
    case "questionsLoaded":
      return { ...state, status: "quiz", questions: action.payload };
    case "newAnswer":
      const currentQuestion = state.questions.at(state.index);
      return {
        ...state,
        userAnswer: action.payload,
        points:
          action.payload === currentQuestion.correctAnswerIndex
            ? state.points + ANSWER_POINTS
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, userAnswer: null };
    case "finishQuiz":
      return { ...state, status: "finished" };
    case "restartQuiz":
      return { ...initialState, questions: state.questions };
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [{ questions, status, category, difficulty, index, userAnswer, points }, dispatch] =
    useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const maxPoints = numOfQuestions * ANSWER_POINTS;
  const scorePercentage = (points / maxPoints) * 100;

  return (
    <>
      {status === "loading" && (
        <StartScreen>
          <Hero dispatch={dispatch} />
        </StartScreen>
      )}
      {status === "selection" && <Selection dispatch={dispatch} />}
      {status === "loadingQuestions" && (
        <StartQuiz category={category} difficulty={difficulty} dispatch={dispatch} />
      )}
      {status === "quiz" && (
        <>
          <Progress
            numOfQuestions={numOfQuestions}
            index={index}
            points={points}
            maxPoints={maxPoints}
          />
          <Quiz
            questions={questions}
            index={index}
            dispatch={dispatch}
            userAnswer={userAnswer}
            numOfQuestions={numOfQuestions}
          />
        </>
      )}
      {status === "finished" && (
        <FinishQuiz
          points={points}
          maxPoints={maxPoints}
          scorePercentage={scorePercentage}
          dispatch={dispatch}
        />
      )}
    </>
  );
}

export default App;
