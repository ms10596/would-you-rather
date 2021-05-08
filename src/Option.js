import { _saveQuestionAnswer, _getQuestions, _getUsers } from "./_DATA"

export default function Option({ currentUser, id, option, name, setQuestions, setUsers }) {
    const handleClick = (e) => {
        _saveQuestionAnswer({ authedUser: currentUser, qid: id, answer: name }).then(
            _getQuestions().then(
                res => setQuestions(res)
            ).then(_getUsers().then(
                res => setUsers(res)
            ))
        )


    }
    return (
        <div>
            <button onClick={handleClick}>{option.text}</button>
            {option.votes.map(vote => <span key={vote}>{vote}, </span>)}
        </div>
    );
}

