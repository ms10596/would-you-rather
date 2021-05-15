import { useDispatch } from "react-redux";
import { _saveQuestionAnswer} from "../_DATA"
import {answerQuestion} from '../redux/actions/questions'
import { answerQuestionUser } from "../redux/actions/users";

export default function Option({ currentUser, id, option, name }) {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        _saveQuestionAnswer({ authedUser: currentUser, qid: id, answer: name })
        dispatch(answerQuestion({ authedUser: currentUser, qid: id, answer: name }))
        dispatch(answerQuestionUser({ authedUser: currentUser, qid: id, answer: name }))
    }
    return (
        <div>
            <button onClick={handleClick}>{option.text}</button>
            {option.votes.map(vote => <span key={vote}>{vote}, </span>)}
        </div>
    );
}

