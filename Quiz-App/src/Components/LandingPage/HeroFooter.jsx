import '../../styles/HeroFooter.css';

const categories = [
  'General knowledge',
  'Science',
  'History',
  'Movies',
  'Sports',
  'Geography',
]

export default function HeroFooter() {
  return (
    <div className="hero-footer">
      {categories.map((category) => (
        <span key={category} className="hero-footer-chip">
          {category}
        </span>
      ))}
    </div>
  )
}
