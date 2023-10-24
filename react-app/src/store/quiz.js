const GET_ALL_PUBLIC = '/quizzes/getPublic'
const GET_SINGLE_QUIZ = '/quizzes/one'
const CREATE_QUIZ = '/quizzes/create'

const getPublic = (data) => {
    return {
        type: GET_ALL_PUBLIC,
        payload: data,
    }
}

const one = (data) => {
    return {
        type: GET_SINGLE_QUIZ,
        payload: data,
    }
}

const create = (data) => {
    return {
        type: CREATE_QUIZ,
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

export const fetchSingleQuiz = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/${id}`)
        if(response.ok) {
            const data = await response.json()
            dispatch(one(data))
            return data
        } else {
            const error = await response.json()
            return error
        }
    } catch (error) {
        const errors = (error && error.json) ? error.json() : { message: error.toString() }
        return errors
    }
}

export const createNewQuiz = (quizInfo) => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizInfo)
        })

        if(response.ok) {
            const data = await response.json()
            dispatch(create(data))
            return data
        } else {
            const errors = await response.json()
            return errors
        }

    } catch (error) {
        const errors = (error && error.json) ? error.json() : { message: error.toString() }
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
        case GET_SINGLE_QUIZ:
            newState = Object.assign({ ...state })
            newState.singleQuiz = action.payload
            return newState
        case CREATE_QUIZ:
            newState = Object.assign({ ...state })
            newState.singleQuiz = action.payload
            return newState
        default:
            return state
    }
}

export default quizReducer;
