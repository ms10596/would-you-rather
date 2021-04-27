import Option from './Option'

function Question({ question }) {
    return (
        <div className="question">
            <h1>Would you rather?</h1>
            <h2>{question.author}</h2>
            <Option option={question.optionOne} />
            <Option option={question.optionTwo} />
        </div>
    );
}

export default Question;
