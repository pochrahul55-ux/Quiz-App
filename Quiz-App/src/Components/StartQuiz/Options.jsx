import '../../styles/Options.css';

export default function Options({ options }) {
  return (
    <div className="options">
      {options.map((option) => (
        <button key={option}>{option}</button>
      ))}
    </div>
  )
}
