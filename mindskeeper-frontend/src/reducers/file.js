import {UPDATE_FILE} from "../constants/actionTypes";
const initialState = {
    files: [],
    linkFile: null,
    selectedId: null,
}

const fileReducer = (state = initialState, action ) => {
    switch (action.type){
        case UPDATE_FILE:
            return {...state, files: action?.files };
        default:
            return {...state};
    }
}

export default fileReducer;