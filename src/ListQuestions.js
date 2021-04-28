import { _getQuestions } from "./_DATA"
import { useEffect, useState } from 'react'
import Question from './Question'

function ListQuestions() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    _getQuestions().then(res => Object.keys(res).map(a => res[a]))
      .then(res => setQuestions(res))
  }, [questions])
  console.log(questions)
  return (
    <div>
      {questions.map(
        question => (<Question key={question.id} question={question} mini={true}/>)
      )}
    </div>
  );
}

export default ListQuestions;
