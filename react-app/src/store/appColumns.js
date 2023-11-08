const GET_ALL_COLUMNS = '/columns/getAll'
const UPDATE_COLUMN = '/columns/update'

const getAll = (data) => {
    return {
        type: GET_ALL_COLUMNS,
        payload: data,
    }
}

const update = (data) => {
    return {
        type: UPDATE_COLUMN,
        payload: data,
    }
}

export const fetchAllColumns = () => async (dispatch) => {
    try {
        const response = await fetch('/api/applications/all-cats')

        if (response.ok) {
            const data = await response.json()
            dispatch(getAll(data))
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

export const updateSingleColumn = (column, listData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/applications/columns/${column}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listData)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(update(data))
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

const initialState = { allColumns: {}, singleColumn: {} }
const columnsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_ALL_COLUMNS:
            newState = Object.assign({ ...state })
            newState.allColumns = action.payload
            return newState
        case UPDATE_COLUMN:
            newState = Object.assign({ ...state })
            newState.singleColumn = action.payload
            return newState
        default:
            return state
    }
}

export default columnsReducer;
