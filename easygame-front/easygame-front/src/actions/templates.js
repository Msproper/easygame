import * as api from "../api"
import {ERROR, START_LOADING, STOP_LOADING, UPDATE_TEMPLATE} from "../constants/actionTypes";


export const updateTemplates = (history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const templates = await api.getTemplates();
        if (templates.status === 200) {
            dispatch({type: UPDATE_TEMPLATE, data: templates.data});
            dispatch({type: STOP_LOADING});
        } else if(templates.response.status >=500){
            dispatch({ type: ERROR, data: {message: templates?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (templates.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}


export const updateAllTemplates = (history) => async (dispatch) => {
    console.log("trying")
    try {
        dispatch({ type: START_LOADING });
        console.log("STARTING")
        const templates = await api.getTemplates();
        if (templates.status === 200) {
            dispatch({type: UPDATE_TEMPLATE, data: templates.data});
            dispatch({type: STOP_LOADING});
            console.log("SUCCESS")
        } else if(templates.response.status >=500){
            dispatch({ type: ERROR, data: {message: templates?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
            console.log("fewofnewifewkfnkwnfjkwne")
            history.push('/')
        } else if (templates.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}
