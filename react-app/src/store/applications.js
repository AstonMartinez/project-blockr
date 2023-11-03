const GET_USER_APPLICATIONS = '/applications/getUser'
const GET_SINGLE_APPLICATION = '/applications/getOne'
const CREATE_NEW_APPLICATION = '/applications/create'
const UPDATE_USER_APPLICATION = '/applications/updateOne'
const DELETE_USER_APPLICATION = '/applications/deleteOne'

const getUser = (data) => {
    return {
        type: GET_USER_APPLICATIONS,
        payload: data,
    }
}

const getOne = (data) => {
    return {
        type: GET_SINGLE_APPLICATION,
        payload: data,
    }
}

const create = (data) => {
    return {
        type: CREATE_NEW_APPLICATION,
        payload: data,
    }
}

const updateOne = (data) => {
    return {
        type: UPDATE_USER_APPLICATION,
        payload: data,
    }
}

const deleteOne = (data) => {
    return {
        type: DELETE_USER_APPLICATION,
        payload: data,
    }
}

export const fetchUserApplications = () => async (dispatch) => {
    try {
        const response = await fetch('/api/applications/user')

        if (response.ok) {
            const data = await response.json()
            dispatch(getUser(data))
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

export const fetchOneApplication = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/applications/${id}`)

        if (response.ok) {
            const data = await response.json()
            dispatch(getOne(data))
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

export const createNewApplication = (appData) => async (dispatch) => {
    try {
        const response = await fetch('/api/applications/new', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appData)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(create(data))
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

export const updateUserApplication = (id, appData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/applications/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appData)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(updateOne(data))
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

export const deleteUserApplication = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/applications/${id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(deleteOne(data))
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

const initialState = { allApplications: {}, singleApplication: {} }
const applicationsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_APPLICATIONS:
            newState = Object.assign({ ...state })
            newState.allApplications = action.payload
            return newState
        case GET_SINGLE_APPLICATION:
            newState = Object.assign({ ...state })
            newState.singleApplication = action.payload
            return newState
        case CREATE_NEW_APPLICATION:
            newState = Object.assign({ ...state })
            newState.singleApplication = action.payload
            return newState
        case UPDATE_USER_APPLICATION:
            newState = Object.assign({ ...state })
            newState.singleApplication = action.payload
            return newState
        case DELETE_USER_APPLICATION:
            newState = Object.assign({ ...state })
            delete newState.allApplications[action.payload]
            return newState
        default:
            return state
    }
}

export default applicationsReducer;
