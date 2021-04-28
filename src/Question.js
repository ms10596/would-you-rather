import Option from './Option'

function Question({ question, mini }) {
   console.log(mini)
   console.log(question)
    if (mini) {
        return (
            <div className="question">
                <h1>Would you rather?</h1>
                <h2>{question.author}</h2>
               <span>{question.optionOne.text.slice(0,10)}</span>
               <button>See more</button>
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

export default Question;
