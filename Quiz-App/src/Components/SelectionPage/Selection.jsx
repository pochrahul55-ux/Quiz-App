import { useEffect, useState } from "react";
import axios from 'axios';
import SelectionLoader from "./SelectionLoader";
import SelectionError from "./SelectionError";

export default function Selection() {
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setStatus('loading');
        const res = await axios('https://opentdb.com/api_category.php');
        console.log(res.data.trivia_categories);
        setCategory(res.data.trivia_categories);
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }
    fetchCategories();
  }, [])
  return (
    <div>
      {status === 'loading' && <SelectionLoader />}
      {status === 'error' && <SelectionError />}
    </div>
  )
}
