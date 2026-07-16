import '../../styles/HeroOptions.css';

export default function HeroOptions() {
  return (
    <div className="hero-options">
      <div className="hero-option">
        <span className="hero-option-letter">A</span>
        <span className="hero-option-text">Definitely nothing</span>
      </div>
      <div className="hero-option">
        <span className="hero-option-letter">B</span>
        <span className="hero-option-text">A worrying amount</span>
      </div>
      <div className="hero-option">
        <span className="hero-option-letter">C</span>
        <span className="hero-option-text">More than my friends</span>
      </div>
      <div className="hero-option hero-option-correct">
        <span className="hero-option-letter">D</span>
        <span className="hero-option-text">Everything, obviously</span>
      </div>
    </div>
  );
}