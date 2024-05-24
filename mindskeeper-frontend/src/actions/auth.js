import * as api from '../api';
import {AUTH, ERROR, LOGOUT, UPDATE} from '../constants/actionTypes';

export const signUp = (authData, history) => async (dispatch) => {
    try {

        const info  = await api.signUp(authData);
        if(info.status === 200){
            dispatch({ type: AUTH, data: info.data});
            if(localStorage.getItem("token")){
                const userData = await api.updateUser();
                if(userData.status === 200){
                    dispatch({ type: UPDATE, data: userData.data});
                    dispatch({ type: "ERROR", data: { message: "Вы успешно зарегистрировались!", type: "success"} })
                    history.push('/panel');
                } else {
                    dispatch({ type: ERROR, data: {message: "Возникла ошибка при входе в аккаунт. Повторите попытку позже", type: "error"} });
                    dispatch({ type: "LOGOUT" });
                    console.log(userData?.response);
                }
            }
        } else {
            dispatch({ type: ERROR, data: {message: info?.response?.data.message, type: "warning"} });
            console.log(info?.response);
        }
    } catch (e) {
        console.log(e);
    }
}

export const signIn = (authData, history) => async (dispatch) => {
    try {
        const info  = await api.signIn(authData);
        if(info.status === 200){
            dispatch({ type: AUTH, data: info.data});
            if(localStorage.getItem("token")){
                const userData = await api.updateUser();
                if(userData.status === 200){
                    dispatch({ type: UPDATE, data: userData.data});
                    dispatch({ type: "ERROR", data: { message: "Вы успешно вошли в аккаунт!", type: "success"} })
                    history.push('/panel');
                } else {
                    dispatch({ type: ERROR, data: {message: "Возникла ошибка при входе в аккаунт. Повторите попытку позже", type: "error"} });
                    dispatch({ type: "LOGOUT" });
                    console.log(userData?.response);
                }
            }
        } else {
            dispatch({ type: ERROR, data: {message: info?.response?.data.message, type: "error"} });
            console.log(info?.response);
        }
    } catch (e) {
        console.log(e);
    }
}

export const updateUser = (history) => async (dispatch) => {
    try {
        if(localStorage.getItem("token")){
            const userData = await api.updateUser();
            if(userData.status === 200){
                dispatch({ type: UPDATE, data: userData.data});
            } else {
                dispatch({ type: LOGOUT});
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                history.push('/');
            }
        }
    } catch (e) {
        console.log(e);
    }
}