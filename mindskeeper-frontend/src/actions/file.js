import * as api from "../api";
import {ERROR, START_LOADING, STOP_LOADING, UPDATE_FILE} from "../constants/actionTypes";

export const updateFile = (history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const files = await api.updateFile();
        if(files.status === 200){
            dispatch({type: UPDATE_FILE, files: files.data});
            dispatch({type: STOP_LOADING});
        }  else if(files.response.status >=500){
            dispatch({ type: ERROR, data: {message: files?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (files.response.status >= 400){
            dispatch({ type: "LOGOUT" });
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}

export const uploadFile = (uploadedFile, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const file = await api.uploadFile(uploadedFile);
        if (file.status === 201) {
            dispatch({type: "ERROR", data: {message: "Файл успешно загружен", type: "info"}});
            dispatch(updateFile(history));
        }  else if(file.response.status >=500){
            dispatch({ type: ERROR, data: {message: file?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (file.response.status === 401){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        } else {
            dispatch({type: ERROR, data: {message: file?.response?.data.message, type: "error"}});
        }
    } catch (e) {
        console.log(e);
    }
}

export const deleteFile = (history, fileId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const files = await api.deleteFile(fileId);
        if(files.status === 200){
            dispatch(updateFile(history));
        } else if(files.response.status >=500){
            dispatch({ type: ERROR, data: {message: files?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (files.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e){
        console.log(e);
    }
}

export const downloadFile = (history, file) => async (dispatch) => {
    try {
        const files = await api.downloadFile(file);
        if(files.status === 200){
            dispatch({ type: "ERROR", data: { message: "Файл успешно загружен", type: "info"} })
        } else if(files.response.status >=500){
            dispatch({ type: ERROR, data: {message: files?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (files.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e){
        console.log(e);
    }
}