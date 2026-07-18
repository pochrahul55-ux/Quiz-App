A React-based trivia quiz app where players pick a category and difficulty level, answer a set of questions pulled from the Open Trivia DB API, and see their score at the end.

Features


Landing page — animated hero section introducing the app
Category & difficulty selection — dropdowns populated dynamically from the Open Trivia DB categories API
Live quiz — one question at a time, with answer options shuffled from the API's correct_answer / incorrect_answers fields
Instant feedback — selected answer is highlighted, correct/wrong answers are color-coded after each pick
Progress tracking — progress bar and running point total shown throughout the quiz
Score summary — animated count-up reveal of final score and percentage at the end
Restart — replay the quiz from the results screen
Loading & error states — styled loading spinner and error message for failed API requests
Timer (planned) — countdown per question/quiz to add time pressure


Data Source

Questions and categories are fetched from the Open Trivia DB API:


GET https://opentdb.com/api_category.php — list of available categories
GET https://opentdb.com/api.php?amount=10&category={id}&difficulty={level}&type=multiple — quiz questions for the selected category/difficulty


Raw API responses are reshaped client-side: answers are combined into a single options array, HTML entities in question/answer text are decoded, and the index of the correct answer is precomputed and stored alongside each question.


Getting Started

bashnpm install
npm run dev

Open the local dev server URL shown in your terminal.

Build

bashnpm run build

Deployment

Deployed on Vercel. Framework preset: Vite, output directory: dist.
