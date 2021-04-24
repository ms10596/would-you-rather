import { _getUsers} from "./_DATA"
import {useEffect, useState} from 'react'
import User from './User'
function LeaderBoard() {
    const [users, setUsers] = useState({})
    console.log(Object.entries(users))
    useEffect(() => {
      _getUsers().then(
        res => setUsers(res)
      ).then(console.log(users))
    }, users)
  return (
      <div>
          {Object.entries(users).map(
            user => (<User user={user[1]}/>)
          )}
      </div>
    );
  }
  
  export default LeaderBoard;
  