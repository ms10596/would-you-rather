import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NewQuestion from './NewQuestion';
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import { _getQuestions, _getUsers } from './_DATA';
import Question from './Question'

export default function App() {
  const [currentUser, setCurrentUser] = useState("")
  const [users, setUsers] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    _getUsers().then(res => setUsers(res))
    _getQuestions().then(res => setQuestions(res))
  }, [])

  if (currentUser) {
    return (
      <Router>
        <Navbar setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Home currentUser={currentUser} questions={questions} />
          </Route>
          <Route exact path="/add">
            <NewQuestion currentUser={currentUser} setQuestions={setQuestions} />
          </Route>
          <Route exact path="/leaderboard" >
            <LeaderBoard users={users} />
          </Route>
          <Route path="/questions/:id">
            <Question questions={questions} currentUser={currentUser} setQuestions={setQuestions} setUsers={setUsers}/>
          </Route>
          <Route path='*' exact={true} >
            <div>404 not found</div>
          </Route>

        </Switch>
      </Router>

    );
  }
  else {
    return (
      <Router>
        <Navbar setCurrentUser={setCurrentUser} />
      </Router>
    );
  }

}


