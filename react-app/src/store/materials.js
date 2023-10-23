const GET_USER_MATERIALS = '/materials/getAll'

const getAll = (data) => {
    return {
        type: GET_USER_MATERIALS,
        payload: data,
    }
}

export const fetchMaterials = () => async (dispatch) => {
    try {
        const response = await fetch('/api/users/materials')
        if(response.ok) {
            const data = await response.json()
            dispatch(getAll(data))
        } else {
            const errors = await response.json()
            return errors
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

const initialState = { allMaterials: {}, singleMaterial: {} }
const materialsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_MATERIALS:
            newState = Object.assign({ ...state })
            newState.allMaterials = action.payload
            return newState
        default:
            return state
    }
}

export default materialsReducer;
