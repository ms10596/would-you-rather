import './App.css'
import MiniQuestion from './MiniQuestion'


export default function Home({ currentUser, questions }) {
  let answeredQuestions = Object.entries(questions).filter(
    ([_, value]) => value["optionOne"]["votes"].includes(currentUser) || value["optionTwo"]["votes"].includes(currentUser)).map(([_, value]) => value).sort((a, b) => a.timestamp - b.timestamp)
  let unansweredQuestions = Object.entries(questions).filter(
    ([_, value]) => !value["optionOne"]["votes"].includes(currentUser) && !value["optionTwo"]["votes"].includes(currentUser)).map(([_, value]) => value).sort((a, b) => a.timestamp - b.timestamp)

  return (
      <div className="row">
        <div className="column">
          <table>
            <thead><tr><th>Answered Questions</th></tr></thead>
            <tbody>
              {answeredQuestions.map(
                row => <tr key={row.id}><td><MiniQuestion question={row} mini={true} questions={questions}/></td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="column">
          <table>
            <thead><tr><th>Unanswered Questions</th></tr></thead>
            <tbody>
              {unansweredQuestions.map(
                row => <tr key={row.id}><td><MiniQuestion question={row} mini={true} questions={questions}/></td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
  );

}


