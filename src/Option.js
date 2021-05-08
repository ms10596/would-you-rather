import { _saveQuestionAnswer, _getQuestions } from "./_DATA"

export default function Option({ currentUser, id, option, name, setQuestions }) {
    const handleClick = (e) => {
        _saveQuestionAnswer({ authedUser: currentUser, qid: id, answer: name }).then(
            _getQuestions().then(
                res => setQuestions(res)
            )
        )
       
    }
    return (
        <div>
            <button onClick={handleClick}>{option.text}</button>
            {option.votes.map(vote => <span key={vote}>{vote}, </span>)}
        </div>
    );
}

