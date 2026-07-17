
export default function Questions({ questions, index }) {
  const question = questions[index]

  return (
    <div>
      <p>{question.question}</p>
    </div>
  )
}
