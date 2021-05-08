import './App.css';
import { _saveQuestion, _getQuestions } from './_DATA'

export default function NewQuestion({ currentUser , setQuestions}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const optionOneText = e.target.optionOne.value
        const optionTwoText = e.target.optionTwo.value
        const author = currentUser
        console.log({ optionOneText, optionTwoText, author })
        _saveQuestion({ optionOneText, optionTwoText, author }).then(
            _getQuestions().then(
                res => setQuestions(res)
            )
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="optionOne" />
            <input type="text" name="optionTwo" />
            <input type="submit" />
        </form>
    );

}


