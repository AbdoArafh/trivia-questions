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
    const answers = incorrect_answers.map((answer) => (
        <div data-correct="false" className="answer rounded" onClick={handleAnswer}>
            {decodeHTML(answer)}
        </div>
    ));
    answers.splice(
        Math.round(Math.random() * answers.length),
        0,
        <div data-correct="true" className="answer rounded" onClick={handleAnswer}>{decodeHTML(correct_answer)}</div>
    )
        
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
                {answers}
            </div>
        </div>
    )
}
