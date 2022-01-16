import { useState, useEffect } from 'preact/hooks';
import Question from './components/question';
import QuestionList from './components/QustionList';

export function App() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const handleAnswer = () => {
    setIndex((i) => (i+1) % 10);
  }
  useEffect( () => {
    fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(d => {
      setData(d.results);
      setLoaded(true);
    });
  } ,[setData]);
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
        <QuestionList index={index}/>
      </div>
    </>
  )
}
