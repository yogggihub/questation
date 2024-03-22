import { questionBank } from './data'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [questions, setquestions] = useState(questionBank);
  const [selectQuestion, setSelectQuestion] = useState(0);
  const [isCheck, setIsCheck] = useState(false)
  const [score, setScore] = useState(0);
  const calculateScore = () => {
    setScore((100 * selectQuestion.length) / questions.length);

  }
  const handleOnChange = (e) => {
    const selectedQuestationIndex = questions.findIndex((question) => question.id === +e.target.name);
    const newSelectedQuestions = [{ ...questions[selectedQuestationIndex], selected: e.target.checked }];
    setSelectQuestion([...questions, ...newSelectedQuestions])
  }
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions?.map((question, index) => (
          <article key={question.id} className='question'>
            <header>
              <h5><span>{index + 1}. </span>{question.question}</h5>
            </header>
            <input name={question.id} value={isCheck} type='radio' checked={isCheck[index]} onChange={handleOnChange} />
            <label>Yes</label>
            <input name={question.id} value={isCheck} type='radio' checked={isCheck[index]} onChange={handleOnChange} />
            <label>No</label>
            {/* <p></p> */}
          </article>
        )
        )}
        <h1>Score {score}</h1>
        <button type='btn' onClick={calculateScore}> get Score</button>
      </section>
    </main>
  );
}

export default App;
