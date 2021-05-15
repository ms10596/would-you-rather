import { RECEIVE_USERS, ANSWER_QUESTION_USER, ADD_QUESTION_USER } from '../actions/users'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case ANSWER_QUESTION_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case ADD_QUESTION_USER:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            }

        default:
            return state
    }
}