import { ClipLoader } from "react-spinners";
import '../../styles/SelectionLoader.css';

export default function SelectionLoader() {
  return (
    <div className="selection-loader">
      <ClipLoader color="#ffb238" size={48} aria-label="Loading Spinner" />
      <p className="selection-loader-text">Shuffling questions…</p>
    </div>
  );
}