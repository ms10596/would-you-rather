import '../App.css';
import Login from './Login';
import { Link } from 'react-router-dom'

export default function Navbar({ setCurrentUser }) {

    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">New Question</Link></li>
                <li><Link to="/leaderboard">LeaderBoard</Link></li>
                <li><Login setCurrentUser={setCurrentUser} /></li>
            </ul>
        </div>

    );
}


