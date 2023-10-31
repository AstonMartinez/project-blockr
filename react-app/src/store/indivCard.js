const GET_ALL_CARDS = '/flashcards/getFullSet'
const GET_SINGLE_CARD = '/flashcards/getSingle'

const getFullSet = (data) => {
    return {
        type: GET_ALL_CARDS,
        payload: data,
    }
}

const getSingle = (data) => {
    return {
        type: GET_SINGLE_CARD,
        payload: data,
    }
}

export const fetchFullSet = (quizId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/flashCards/sets/${quizId}/cards`)

        if (response.ok) {
            const data = await response.json()
            dispatch(getFullSet(data))
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

export const fetchSingleCard = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/flashCards/${id}`)

        if (response.ok) {
            const data = await response.json()
            dispatch(getSingle(data))
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

const initialState = { allFlashCards: {}, singleFlashCard: {} }
const flashCardReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_ALL_CARDS:
            newState = Object.assign({ ...state })
            newState.allFlashCards = action.payload
            return newState
        case GET_SINGLE_CARD:
            newState = Object.assign({ ...state })
            newState.singleFlashCard = action.payload
            return newState
        default:
            return state
    }
}

export default flashCardReducer;
