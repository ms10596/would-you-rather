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

export default function App() {
  const [currentUser, setCurrentUser] = useState("")
  const [users, setUsers] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    _getUsers().then(res => setUsers(res))
    _getQuestions().then(res => setQuestions(res))
  }, [])
  

  return (
    <Router>
      <Navbar setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
          <Home currentUser={currentUser} questions={questions}/>
        </Route>
        <Route exact path="/new-question">
          <NewQuestion currentUser={currentUser} />
        </Route>
        <Route exact path="/leaderboard" >
          <LeaderBoard users={users}/>
        </Route>
      </Switch>
    </Router>

  );
}


