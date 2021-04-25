import { _getUsers } from "./_DATA"
import { useEffect, useState } from 'react'
import User from './User'

function LeaderBoard() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    _getUsers().then(res => Object.keys(res).map(a => res[a]))
      .then(res => res.sort((a, b) => a["questions"].length - b["answers"].length))
      .then(res => setUsers(res))
  }, [users])

  return (
    <div>
      {users.map(
        user => (<User key={user.name} user={user} />)
      )}
    </div>
  );
}

export default LeaderBoard;
