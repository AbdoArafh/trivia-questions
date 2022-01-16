export default function QuestionList({index, amount}) {
    return (
        <div class="question-list rounded">
          {Array.from(Array(amount)).map((_, i) => (
            <div class={"question-item " + (i <= index ? (i === index ? "current" : "previous") : "")} key={i.toString()}>Question {i+1}</div>
          ))}
        </div>
    )
}