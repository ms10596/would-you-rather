import './App.css';
import {useState} from 'react'
import Navbar from './Navbar';

export default function App() {
  const [currentUser, setCurrentUser] = useState("")
  return (
    <div>
     <Navbar setCurrentUser={setCurrentUser}/>
    </div>
  );
}


