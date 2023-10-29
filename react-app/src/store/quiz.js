const GET_ALL_PUBLIC = '/quizzes/getPublic'
const GET_SINGLE_QUIZ = '/quizzes/one'
const CREATE_QUIZ = '/quizzes/create'
const GET_USER_QUIZZES = '/quizzes/user'
const GET_ALL_AVAILABLE = '/quizzes/available'
const GET_BY_CATEGORY = '/quizzes/byCategory'
const DELETE_QUIZ = '/quizzes/deleteQuiz'
const UPDATE_QUIZ = '/quizzes/updateQuiz'

const updateQuiz = (data) => {
    return {
        type: UPDATE_QUIZ,
        payload: data,
    }
}

const user = (data) => {
    return {
        type: GET_USER_QUIZZES,
        payload: data,
    }
}

const available = (data) => {
    return {
        type: GET_ALL_AVAILABLE,
        payload: data,
    }
}

const byCategory = (data) => {
    return {
        type: GET_BY_CATEGORY,
        payload: data,
    }
}

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

const deleteQuiz = (data) => {
    return {
        type: DELETE_QUIZ,
        payload: data,
    }
}

export const updateUserQuiz = (id, quizData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizData)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(updateQuiz(data))
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

export const deleteUserQuiz = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/${id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const data = response.json()
            dispatch(deleteQuiz(data))
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

export const fetchByCategory = (category) => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/${category}`)
        if (response.ok) {
            const data = await response.json()
            dispatch(byCategory(data))
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

export const fetchAllAvailable = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/all`)
        if (response.ok) {
            const data = await response.json()
            dispatch(available(data))
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

export const fetchUserQuizzes = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/trivia/quizzes/user-quizzes`)
        if (response.ok) {
            const data = await response.json()
            dispatch(user(data))
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
        case GET_USER_QUIZZES:
            newState = Object.assign({ ...state })
            newState.allQuizzes = action.payload
            return newState
        case GET_ALL_AVAILABLE:
            newState = Object.assign({ ...state })
            newState.allQuizzes = action.payload
            return newState
        case GET_BY_CATEGORY:
            newState = Object.assign({ ...state })
            newState.allQuizzes = action.payload
            return newState
        case DELETE_QUIZ:
            newState = Object.assign({ ...state })
            delete newState.allQuizzes[action.payload]
            return newState
        case UPDATE_QUIZ:
            newState = Object.assign({ ...state })
            newState.singleQuiz = action.payload
            return newState
        default:
            return state
    }
}

export default quizReducer;
