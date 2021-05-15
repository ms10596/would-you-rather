import User from './User'

export default function LeaderBoard({ users }) {
  const users_list = Object.keys(users).map(a => users[a])
  users_list.sort((a, b) => (Object.keys(b["answers"]).length + b["questions"].length) -(Object.keys(a["answers"]).length + a["questions"].length))

  return (
    <table>
      <tbody>
      {users_list.map(
        user => (<User key={user.name} user={user} />)
      )}
      </tbody>
    </table>
  );
}

