const GET_USER_SESSIONS = '/studysessions/allCurrent'
const GET_BY_CATEGORY = '/studysessions/byCat'
const CREATE_STUDY_SESSION = '/studysessions/create'
const DELETE_STUDY_SESSION = '/studysessions/deleteSess'
const GET_RECENT = '/studysessions/recent'

const recent = (data) => {
    return {
        type: GET_RECENT,
        payload: data,
    }
}

const allCurrent = (data) => {
    return {
        type: GET_USER_SESSIONS,
        payload: data,
    }
}

const byCat = (data) => {
    return {
        type: GET_BY_CATEGORY,
        payload: data,
    }
}

const create = (data) => {
    return {
        type: CREATE_STUDY_SESSION,
        payload: data,
    }
}

const deleteSess = (data) => {
    return {
        type: DELETE_STUDY_SESSION,
        payload: data,
    }
}

export const getRecentSessions = () => async (dispatch) => {
    try {
        const response = await fetch('/api/study/current/recent')
        if(response.ok) {
            const data = await response.json()
            dispatch(recent(data))
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

export const getAllSessions = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/study/current/all`)
        if(response.ok) {
            const data = await response.json()
            dispatch(allCurrent(data))
            return data
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const getByCategory = (category) => async (dispatch) => {
    try {
        const response = await fetch(`/api/study/current/${category}`)
        if(response.ok) {
            const data = await response.json()
            dispatch(byCat(data))
            return data
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const createNewSession = (sessionData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/study/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sessionData)
        })
        if(response.ok) {
            const data = await response.json()
            dispatch(create(data))
            return data
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteSession = (sessionId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/study/${sessionId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok) {
            const data = await response.json()
            dispatch(deleteSess(data))
            return data
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

const initialState = { allSessions: {}, singleSession: {} }
const studyReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_SESSIONS:
            newState = Object.assign({ ...state })
            newState.allSessions = action.payload
            return newState
        case GET_BY_CATEGORY:
            newState = Object.assign({ ...state })
            newState.allSessions = action.payload
            return newState
        case CREATE_STUDY_SESSION:
            newState = Object.assign({ ...state })
            newState.singleSession = action.payload
            return newState
        case DELETE_STUDY_SESSION:
            newState = Object.assign({ ...state })
            delete newState.allSessions[action.payload]
            return newState
        case GET_RECENT:
            newState = Object.assign({ ...state })
            newState.allSessions = action.payload
            return newState
        default:
            return state
    }
}

export default studyReducer;
