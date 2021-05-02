import { _getUsers } from "./_DATA"
import { useEffect, useState } from 'react'
import User from './User'

export default function LeaderBoard() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    _getUsers()
      .then(res => Object.keys(res).map(a => res[a]))
      .then(res => res.sort((a, b) => (Object.keys(b["answers"]).length+b["questions"].length) - 
      (Object.keys(a["answers"]).length+a["questions"].length)))
      .then(res => setUsers(res))
  }, [users])

  return (
    <table>
      {users.map(
        user => (<User key={user.name} user={user} />)
      )}
    </table>
  );
}

