const GET_SETS = '/cards/getAllSets'
const GET_SINGLE_SET = '/cards/getOne'
const CREATE_SET = '/cards/create'
const DELETE_SET = '/cards/deleteSet'
const UPDATE_SET = '/cards/updateSet'
const GET_ALL_AVAILABLE = '/cards/available'
const GET_USER_SETS = '/cards/userCards'
const GET_BY_CATEGORY = '/cards/byCategory'
const GET_INFO_ONLY = '/cards/infoOnly'

const infoOnly = (data) => {
    return {
        type: GET_INFO_ONLY,
        payload: data,
    }
}

const available = (data) => {
    return {
        type: GET_ALL_AVAILABLE,
        payload: data,
    }
}

const userCards = (data) => {
    return {
        type: GET_USER_SETS,
        payload: data,
    }
}

const byCategory = (data) => {
    return {
        type: GET_BY_CATEGORY,
        payload: data,
    }
}

const deleteSet = (data) => {
    return {
        type: DELETE_SET,
        payload: data,
    }
}

const updateSet = (data) => {
    return {
        type: UPDATE_SET,
        payload: data,
    }
}

const getAllSets = (data) => {
    return {
        type: GET_SETS,
        payload: data,
    }
}

const getOne = (data) => {
    return {
        type: GET_SINGLE_SET,
        payload: data,
    }
}

const create = (data) => {
    return {
        type: CREATE_SET,
        payload: data,
    }
}

export const fetchQuizInfoOnly = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/${id}/info-only`)

        if (response.ok) {
            const data = await response.json()
            dispatch(infoOnly(data))
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

export const fetchSetByCategory = (category) => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/${category}`)

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

export const fetchUserSets = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/user-sets`)

        if (response.ok) {
            const data = await response.json()
            dispatch(userCards(data))
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

export const fetchAvailableSets = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/all`)

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

export const updateUserSet = (id, setData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setData)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(updateSet(data))
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

export const deleteUserSet = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/${id}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(deleteSet(data))
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

export const getCardSets = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/public`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getAllSets(data))
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

export const getOneSet = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/${id}`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getOne(data))
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

export const createFlashCardSet = (setData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setData)
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
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

const initialState = { allSets: {}, singleSet: {} }
const cardsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_SETS:
            newState = Object.assign({ ...state })
            newState.allSets = action.payload
            return newState
        case GET_SINGLE_SET:
            newState = Object.assign({ ...state })
            newState.singleSet = action.payload
            return newState
        case CREATE_SET:
            newState = Object.assign({ ...state })
            newState.singleSet = action.payload
            return newState
        case UPDATE_SET:
            newState = Object.assign({ ...state })
            newState.singleSet = action.payload
            return newState
        case DELETE_SET:
            newState = Object.assign({ ...state })
            delete newState.allSets[action.payload]
            return newState
        case GET_ALL_AVAILABLE:
            newState = Object.assign({ ...state })
            newState.allSets = action.payload
            return newState
        case GET_USER_SETS:
            newState = Object.assign({ ...state })
            newState.allSets = action.payload
            return newState
        case GET_BY_CATEGORY:
            newState = Object.assign({ ...state })
            newState.allSets = action.payload
            return newState
        case GET_INFO_ONLY:
            newState = Object.assign({ ...state })
            newState.singleSet = action.payload
            return newState
        default:
            return state
    }
}

export default cardsReducer;
