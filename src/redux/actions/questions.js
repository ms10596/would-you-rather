export const ANSWER_QUESTION = 'TOGGLE_TWEET'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'



export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


export function answerQuestion({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer,
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

