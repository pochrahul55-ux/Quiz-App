import { useState } from "react";
import '../../styles/GameSelection.css';

const difficultyLevel = ['Easy', 'Medium', 'Hard'];

export default function GameSelection({ categories, dispatch }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('')

  return (
    <div className="game-selection">
      <p className="game-selection-eyebrow">Almost there!</p>
      <h2 className="game-selection-heading">Pick your battlefield</h2>

      <select className="game-selection-dropdown" onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Choose a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>

      <select className="game-selection-dropdown" onChange={(e) => setSelectedLevel(e.target.value)}>
        <option value="">Choose a difficulty</option>
        {difficultyLevel.map((level) => (
          <option key={level} value={level}>{level}</option>
        ))}
      </select>

      <button className="game-selection-button" onClick={() => dispatch({ type: 'begin', payload: { category: selectedCategory, difficulty: selectedLevel } })}>Let's begin</button>
    </div>
  )
}
