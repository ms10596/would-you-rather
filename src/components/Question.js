import Option from './Option'
import {
    useParams
} from "react-router-dom";
import {  useSelector , shallowEqual} from 'react-redux';

export default function Question({ currentUser }) {
    let { id } = useParams()
    let questions = useSelector((state) => state.questions, shallowEqual);
    let question = questions[id]
    if (!question) {
        return (
            <div>Not found</div>
        )
    }
    let optionOnePercentage = question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100
    let optionTwoPercentage = question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100

    let answered = question.optionOne.votes.includes(currentUser) || question.optionTwo.votes.includes(currentUser)
    
    if (!answered) {
        return (
            <div className="question">
                <h1>Would you rather?</h1>
                <img src={`https://i.pravatar.cc/150?u=${question.author}`} alt="author photos" />
                <h2>{question.author}</h2>
                <Option currentUser={currentUser} id={id} option={question.optionOne} name="optionOne" />
                <Option currentUser={currentUser} id={id} option={question.optionTwo} name="optionTwo" />
            </div>
        );
    }
    else {
        return (
            <div className="question">


                <h1>Would you rather?</h1>
                <h2>{question.author}</h2>
                <div>
                    <button disabled={true}>{question.optionOne.text}: {optionOnePercentage}%</button>
                    <progress value={optionOnePercentage} max="100" > {optionOnePercentage} </progress>
                </div>
                <div>
                    <button disabled={true}>{question.optionTwo.text}: {optionTwoPercentage}%</button>
                    <progress value={optionTwoPercentage} max="100"> {optionTwoPercentage} </progress>
                </div>
            </div>
        )
    }


}

