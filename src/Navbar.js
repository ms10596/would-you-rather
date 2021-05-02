import './App.css';
import LeaderBoard from './LeaderBoard'
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NewQuestion from './NewQuestion';
import Home from './Home'

export default function Navbar({ setCurrentUser }) {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new-question">New Question</Link></li>
                    <li><Link to="/leaderboard">LeaderBoard</Link></li>
                    <li><Login setCurrentUser={setCurrentUser} /></li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/new-question">
                        <NewQuestion />
                    </Route>
                    <Route exact path="/leaderboard">
                        <LeaderBoard />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}


