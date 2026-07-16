import './App.css';
import StartScreen from './Components/LandingPage/StartScreen';
import Hero from './Components/LandingPage/Hero';
import { useReducer } from 'react';
import Selection from './Components/SelectionPage/Selection';

const initialState = {
  questions: [],
  status: 'loading',
}

function reducer(state, action) {
  switch (action.type) {
    case 'startQuiz':
      return { ...state, status: 'selection' }

    default:
      throw new Error('Unknown Action');
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {status === 'loading' && (
        <StartScreen>
          <Hero dispatch={dispatch} />
        </StartScreen>
      )}
      {status === 'selection' && <Selection />}
    </>
  )
}

export default App
