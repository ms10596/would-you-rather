

export default function User({ user }) {
  return (
    <tr>
      <td>
        <h1>{user.name}</h1>
        <img src={user.avatarURL} alt={user.name} />
        <h5>Questions: {user.questions.length}</h5>
        <h5>Answers: {Object.keys(user.answers).length}</h5>
      </td>
    </tr>
  );
}

