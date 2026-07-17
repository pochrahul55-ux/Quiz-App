import '../../styles/Options.css';

export default function Options({ options, dispatch, userAnswer, correctAnswer }) {

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={userAnswer !== null}
          className={`options-buttons ${index === userAnswer ? 'answer' : ''} ${userAnswer !== null
            ? index === correctAnswer
              ? 'correct'
              : 'wrong'
            : ''
            }`}
        >{option}
        </button>
      ))}
    </div>
  )
}
