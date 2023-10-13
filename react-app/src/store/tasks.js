const CREATE_TASK = '/tasks/create'
const GET_BY_DATE = '/tasks/byDate'
const DELETE_TASK = '/tasks/deleteTask'
const UPDATE_TASK = '/tasks/update'

const create = (data) => {
    return {
        type: CREATE_TASK,
        payload: data
    }
}

const byDate = (data) => {
    return {
        type: GET_BY_DATE,
        payload: data
    }
}

const deleteTask = (data) => {
    return {
        type: DELETE_TASK,
        payload: data
    }
}

const update = (data) => {
    return {
        type: UPDATE_TASK,
        payload: data
    }
}

export const getByDate = (date) => async (dispatch) => {
    try {
        const response = await fetch(`/api/tasks/${date}`)
        if(response.ok) {
            const data = await response.json()
            dispatch(byDate(data))
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

export const createTask = (taskData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/tasks/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
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

export const deleteUserTask = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/tasks/${id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok) {
            const data = await response.json()
            dispatch(deleteTask(data))
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

export const updateUserTask = (id, taskData) => async (dispatch) => {
    try {
        const response = await fetch(`/api/tasks/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
        if(response.ok) {
            const data = await response.json()
            dispatch(update(data))
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

const initialState = { allTasks: {}, singleTask: {} }
const taskReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_BY_DATE:
            newState = Object.assign({ ...state })
            newState.allTasks = action.payload
            return newState
        case CREATE_TASK:
            newState = Object.assign({ ...state })
            newState.singleTask = action.payload
            return newState
        case DELETE_TASK:
            newState = Object.assign({ ...state })
            delete newState.allTasks[action.payload]
            return newState
        case UPDATE_TASK:
            newState = Object.assign({ ...state })
            newState.singleTask = action.payload
            return newState
        default:
            return state
    }
}

export default taskReducer;
