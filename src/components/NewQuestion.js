import '../App.css';
import { _saveQuestion} from '../_DATA'
import { Redirect } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addQuestion} from '../redux/actions/questions'
import {addQuestionUser} from '../redux/actions/users'

export default function NewQuestion({ currentUser }) {
    let [submitted, setSubmitted] = useState(false)
    let dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const optionOneText = e.target.optionOne.value
        const optionTwoText = e.target.optionTwo.value
        const author = currentUser

        _saveQuestion({ optionOneText, optionTwoText, author }).then(
            res => {
                dispatch(addQuestion(res))
                dispatch(addQuestionUser(res))
            }
            
        ).then(setSubmitted(true))
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


