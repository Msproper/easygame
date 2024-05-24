import {CREATE_TEMPLATE, UPDATE_TEMPLATE} from "../constants/actionTypes";

const initialState = {
    templates: null
};

const templateReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_TEMPLATE:
            return state;
        case UPDATE_TEMPLATE:
            return {...state, templates: action?.data};
        default:
            return state;
    }
}

export default templateReducer;