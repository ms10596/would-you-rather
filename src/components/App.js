import '../App.css';
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
import Question from './Question'
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../redux/actions';



export default function App() {
  const [currentUser, setCurrentUser] = useState("")
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  })

  if (currentUser) {
    return (
      <Router>
        <Navbar setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Home currentUser={currentUser} />
          </Route>
          <Route exact path="/add">
            <NewQuestion currentUser={currentUser} />
          </Route>
          <Route exact path="/leaderboard" >
            <LeaderBoard users={users} />
          </Route>
          <Route path="/questions/:id">
            <Question currentUser={currentUser} setUsers={setUsers} />
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


