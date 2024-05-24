import {CREATE_TASK, UPDATE_TASK} from "../constants/actionTypes";

const initialState = {
    tasks: null
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return state;
        case UPDATE_TASK:
            return {...state, tasks: action?.data};
        default:
            return state;
    }
}

export default taskReducer;