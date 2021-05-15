import { ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS} from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: [...state[action.qid][action.answer]["votes"], action.authedUser]
                    }
                }
            }
        case ADD_QUESTION:

            return {
                ...state,
                [action.qid]: {
                    question: action.question
                }
            }

        default:
            return state
    }
}