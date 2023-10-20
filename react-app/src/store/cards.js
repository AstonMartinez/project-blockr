const GET_SETS = '/cards/getAllSets'
const GET_SINGLE_SET = '/cards/getOne'

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

export const getCardSets = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/cards/sets`)
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
        default:
            return state
    }
}

export default cardsReducer;
