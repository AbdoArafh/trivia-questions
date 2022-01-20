import { useState, useEffect } from 'preact/hooks';
import Question from './components/question';
import QuestionList from './components/QustionList';

export function App() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState(15);
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [available, setAvailable] = useState(true);

  const loadData = () => {
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=easy`)
      .then(res => res.json())
      .then(d => {
        setData(d.results);
        setLoaded(true);
      });
  }

  const nextQuestion = () => {
    document.querySelectorAll(".answer")
      .forEach(el => {
        el.classList.remove("wrong");
        el.classList.remove("correct");
      });
    setIndex((i) => {
      if ((i + 1) % amount === 0)  {
        loadData();
        setLoaded(false);
      }
      return (i+1) % amount;
    });
    setAvailable(true);
  }

  const handleAnswer = (event) => {
    if (!available) return;
    if (event.target.dataset.correct === "false") {
      event.target.classList.add("wrong");
      setWrong(prev => {
        prev.push(index);
        return prev;
      });
    } else {
      event.target.classList.add("correct");
      setCorrect(prev => {
        prev.push(index);
        return prev;
      });
    }
    setAvailable(false);
    window.setTimeout(
      nextQuestion,
      1000);
  }

  useEffect(loadData, []);

  return (
    <>
      <div class="title">Cool Questions?</div>
      <div class="content">
        { loaded
          ?
          <Question data={data[index]} handleAnswer={handleAnswer} />
          : 
          <div className="loading rounded"></div>
        }
        <QuestionList index={index} amount={amount} correct={correct} wrong={wrong}/>
      </div>
    </>
  )
}
