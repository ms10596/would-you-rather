import Option from './Option'
import {
    useParams
} from "react-router-dom";

export default function Question({ questions }) {
    let { id } = useParams()
    let question  = questions[id]
    console.log(question)
    return (
        <div className="question">
            <h1>Would you rather?</h1>
            <h2>{question.author}</h2>
            <Option option={question.optionOne} />
            <Option option={question.optionTwo} />
        </div>
    );

}

