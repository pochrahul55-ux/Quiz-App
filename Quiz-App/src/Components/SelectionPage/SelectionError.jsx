
import '../../styles/SelectionError.css';

export default function SelectionError() {
  return (
    <div className="selection-error">
      <p className="selection-error-text">Couldn't load categories. Please try again.</p>
      <button className="selection-error-retry" onClick={() => window.location.reload()}>Retry</button>
    </div>
  )
}
