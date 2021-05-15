export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION_USER = 'ANSWER_USER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function answerQuestionUser({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION_USER,
        authedUser,
        qid,
        answer,
    }
}

export function addQuestionUser(question) {
    return {
        type: ADD_QUESTION_USER,
        question
    }
}