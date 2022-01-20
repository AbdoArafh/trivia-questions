export default function QuestionList({index, amount, correct, wrong}) {
    const classNameFunc = (i) => {
      let classNameStr = "question-item " + (i <= index ? (i === index ? "current" : "previous") : "");
      classNameStr += correct.find(x => x === i) ? " correct" : "";
      classNameStr += wrong.find(x => x === i) ? " wrong" : "";
      return classNameStr;
    }
    return (
        <div class="question-list rounded">
          {Array.from(Array(amount)).map((_, i) => (
            <div class={classNameFunc(i)} key={i.toString()}>Question {i+1}</div>
          ))}
        </div>
    )
}