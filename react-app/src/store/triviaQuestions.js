const GET_BY_QUIZ_ID = '/questions/getById'
const DELETE_QUESTION = '/questions/deleteQ'
const UPDATE_QUESTION = '/questions/updateQ'

const updateQ = (data) => {
    return {
        type: UPDATE_QUESTION,
        payload: data,
    }
}

const deleteQ = (data) => {
    return {
        type: DELETE_QUESTION,
        payload: data,
    }
}

const getById = (data) => {
    return {
        type: GET_BY_QUIZ_ID,
        payload: data,
    }
}

export const updateQuiz = (id, quizData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/quizzes/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizData)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(updateQ(data))
            return data
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteQuizQ = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/quizzes/${id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const data = await response.json()
            dispatch(deleteQ(data))
            return data
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const getByQuizId = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/quizzes/${id}/all`)
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
        case UPDATE_QUESTION:
            newState = Object.assign({ ...state })
            newState.singleQuestion = action.payload
            return newState
        case DELETE_QUESTION:
            newState = Object.assign({ ...state })
            delete newState.allQuestions[action.payload]
            return newState
        default:
            return state
    }
}

export default questionReducer;
