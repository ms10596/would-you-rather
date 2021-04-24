

function User({user}) {
    console.log(user)
    return (
      <div>
        <h1>{user.name}</h1>
        <img src={user.avatarURL} />
        {/* <h2>{user.questions.length}</h2>
        <h2>{user.answers.length}</h2> */}

      </div>
    );
  }
  
  export default User;
  