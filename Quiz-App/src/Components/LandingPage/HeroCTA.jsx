import '../../styles/HeroCTA.css';

export default function HeroCTA({ dispatch }) {
  return (
    <div className="hero-cta">
      <button className="hero-cta-button" onClick={() => dispatch({ type: 'startQuiz' })}>Start the quiz</button>
      <span className="hero-cta-note">10 questions · pick your difficulty</span>
    </div>
  );
}