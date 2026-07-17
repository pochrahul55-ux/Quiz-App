import './App.css';
import StartScreen from './Components/LandingPage/StartScreen';
import Hero from './Components/LandingPage/Hero';
import { useReducer } from 'react';
import Selection from './Components/SelectionPage/Selection';
import StartQuiz from './Components/StartQuiz/StartQuiz';
import Questions from './Components/StartQuiz/Questions';
import Quiz from './Components/StartQuiz/Quiz';

const initialState = {
  questions: [],
  status: 'loading',
  category: null,
  difficulty: null,
  index: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'startQuiz':
      return { ...state, status: 'selection' }
    case 'begin':
      return { ...state, status: 'loadingQuestions', category: action.payload.category, difficulty: action.payload.difficulty }
    case 'questionsLoaded':
      return { ...state, status: 'quiz', questions: action.payload }

    default:
      throw new Error('Unknown Action');
  }
}

function App() {
  const [{ questions, status, category, difficulty, index }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {status === 'loading' && (
        <StartScreen>
          <Hero dispatch={dispatch} />
        </StartScreen>
      )}
      {status === 'selection' && <Selection dispatch={dispatch} />}
      {status === 'loadingQuestions' && <StartQuiz category={category} difficulty={difficulty} dispatch={dispatch} />}
      {status === 'quiz' && <Quiz questions={questions} index={index} />}
    </>
  )
}

export default App
