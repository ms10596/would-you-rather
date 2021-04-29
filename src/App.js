import './App.css';
import LeaderBoard from './LeaderBoard'
import ListQuestions from './ListQuestions'
import Login from './Login';

function App() {
  return (
    <div>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">New Question</a></li>
        <li><a href="contact.asp">LeaderBoard</a></li>
        <li><Login /></li>
      </ul>
    </div>
  );
}

export default App;

