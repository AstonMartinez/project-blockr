const GET_ALL_PUBLIC = '/quizzes/getPublic'

const getPublic = (data) => {
    return {
        type: GET_ALL_PUBLIC,
        payload: data,
    }
}

export const fetchAllPublic = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/public`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getPublic(data))
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

const initialState = { allQuizzes: {}, singleQuiz: {} }
const quizReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_ALL_PUBLIC:
            newState = Object.assign({ ...state })
            newState.allQuizzes = action.payload
            return newState
        default:
            return state
    }
}

export default quizReducer;
