export default function Question({data, handleAnswer}) {
    const {
        category, 
        difficulty, 
        correct_answer,
        incorrect_answers,
        question} = data;
    const decodeHTML = (html) => {
        const el = document.createElement('div');
        el.innerHTML = html;
        return el.textContent;
    }
    return (
        <div class="question">
            <div class="info">
                <div class="diff rounded">
                    {difficulty}
                </div>
                <div class="category rounded">
                    {category}
                </div>
            </div>
            <div class="question-text rounded">
                {decodeHTML(question)}
            </div>
            <div class="answers">
                <div className="answer" onClick={handleAnswer}>{decodeHTML(correct_answer)}</div>
                {incorrect_answers.map((answer) => (
                    <div className="answer" key={answer}>
                        {decodeHTML(answer)}
                    </div>
                ))}
            </div>
        </div>
    )
}