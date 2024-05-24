import { ERROR, CLEARERROR} from "../constants/actionTypes";

const errorReducer = (state = {message: null, type: "error" } , action) => {
    switch (action.type){
        case ERROR:
            return { ...state, message: action?.data.message, type: action?.data.type }
        case CLEARERROR:
            return {...state, message: null}
        default:
            return state
    }
}

export default errorReducer;