import {_getQuestions} from '../../_DATA'
export const ANSWER_QUESTION = 'TOGGLE_TWEET'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'


export function handleInitialData() {
    return (dispatch) => {
        return _getQuestions()
            .then((res) => {
                dispatch(receiveQuestions(res))
            })
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

// function answerQuestion({ authedUser, qid, answer }) {
//     return {
//         type: ANSWER_QUESTION,
//         authedUser,
//         qid,
//         answer,
//     }
// }

// function addQuestion({ optionOneText, optionTwoText, author }) {
//     return {
//         type: ADD_QUESTION,
//         question: {
//             optionOneText,
//             optionTwoText,
//             author
//         }
//     }
// }
