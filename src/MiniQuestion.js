import Option from './Option'
import {
    Link
} from "react-router-dom";


export default function MiniQuestion({ question, mini }) {
    if (mini) {
        return (
            <div className="question">
                <h1>Would you rather?</h1>
                <h2>{question.author}</h2>
                <span>{question.optionOne.text.slice(0, 10)}</span>
                <button><Link to={`/questions/${question.id}`}>See more</Link></button>

            </div>
        )
    }
    else {
        return (
            <div className="question">
                <h1>Would you rather?</h1>
                <h2>{question.author}</h2>
                <Option option={question.optionOne} />
                <Option option={question.optionTwo} />
            </div>
        );
    }
}

