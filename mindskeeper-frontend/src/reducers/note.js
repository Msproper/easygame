import {CREATE_NOTE, UPDATE_NOTE} from "../constants/actionTypes";

const initialState = {
    notes: null
};

const noteReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_NOTE:
            return state;
        case UPDATE_NOTE:
            return {...state, notes: action?.data};
        default:
            return state;
    }
}

export default noteReducer;