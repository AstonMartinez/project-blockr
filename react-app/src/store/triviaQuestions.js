const GET_BY_QUIZ_ID = '/questions/getById'

const getById = (data) => {
    return {
        type: GET_BY_QUIZ_ID,
        payload: data,
    }
}

export const getByQuizId = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/quizzes/${id}/questions`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getById(data))
            return data
        } else {
            const errors = await response.json()
            return errors
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

const initialState = { allQuestions: {}, singleQuestion: {} }
const questionReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_BY_QUIZ_ID:
            newState = Object.assign({ ...state })
            newState.allQuestions = action.payload
            return newState
        default:
            return state
    }
}

export default questionReducer;
