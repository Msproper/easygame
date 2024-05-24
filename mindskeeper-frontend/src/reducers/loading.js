import {START_LOADING, STOP_LOADING} from "../constants/actionTypes";

const loadingReducer = (state = {isActive: false } , action) => {
    switch (action.type){
        case START_LOADING:
            return { ...state, isActive: true }
        case STOP_LOADING:
            return {...state, isActive: false}
        default:
            return state
    }
}

export default loadingReducer;