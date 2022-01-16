export default function QuestionList({index}) {
    return (
        <div class="question-list rounded">
          {Array.from(Array(10)).map((_, i) => (
            <div class={"question-item " + (i <= index ? (i === index ? "current" : "previous") : "")} key={i.toString()}>Question {i+1}</div>
          ))}
        </div>
    )
}