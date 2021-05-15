import '../App.css';
import { _saveQuestion, _getQuestions } from '../_DATA'
import { Redirect } from 'react-router-dom'
import { useState } from 'react';

export default function NewQuestion({ currentUser, setQuestions }) {
    let [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const optionOneText = e.target.optionOne.value
        const optionTwoText = e.target.optionTwo.value
        const author = currentUser

        _saveQuestion({ optionOneText, optionTwoText, author }).then(
            _getQuestions().then(
                res => setQuestions(res)
            ).then(setSubmitted(true))
        )
    }

    if (!submitted) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Option One: </label>
                    <input type="text" name="optionOne" />
                    <label>Option Two: </label>
                    <input type="text" name="optionTwo" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
    else {
        return (
            <Redirect to="/" />
        )
    }
}


