import { AUTH, LOGOUT, UPDATE  } from "../constants/actionTypes";
const initialState = {
    token: null,
    user: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type){
        case AUTH:
            localStorage.setItem('token', JSON.stringify(action?.data.token));
            return { ...state, token: action?.data.token }
        case UPDATE:
            localStorage.setItem('user', JSON.stringify(action?.data))
            return { ...state, user: action?.data }
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return { ...initialState }
        default:
            return state;
    }
}

export default authReducer;