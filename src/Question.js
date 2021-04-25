import Option from './Option'

function Question({ question }) {
    return (
        <div>
            <h1>{question.id}</h1>
            <h1>{question.author}</h1>
            <h1>{question.timestamp}</h1>
            <Option option={question.optionOne} />
            <Option option={question.optionTwo} />
        </div>
    );
}

export default Question;
