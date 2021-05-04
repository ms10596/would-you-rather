import './App.css'
import Question from "./Question"
export default function Home({ currentUser, questions }) {
  let answeredQuestions = Object.entries(questions).filter(row => row[1]["optionOne"]["votes"].includes(currentUser) || row[1]["optionTwo"]["votes"].includes(currentUser))
  let unansweredQuestions = Object.entries(questions).filter(row => !row[1]["optionOne"]["votes"].includes(currentUser) && !row[1]["optionTwo"]["votes"].includes(currentUser))


  return (
    <div className="row">
      <div className="column">
        <table>
          {answeredQuestions.map(
            row => <tr><td><Question question={row[1]} /></td></tr>
          )}
        </table>
        </div>
        <div className="column">
          <table>
            {unansweredQuestions.map(
              row => <tr><td><Question question={row[1]} /></td></tr>
            )}
          </table>
        </div>
      </div>
  );
}


