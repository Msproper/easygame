import * as api from "../api"
import {ERROR, START_LOADING, STOP_LOADING, UPDATE_NOTE} from "../constants/actionTypes";


export const updateNote = (history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const notes = await api.updateNote();
        if (notes.status === 200) {
            dispatch({type: UPDATE_NOTE, data: notes.data});
            dispatch({type: STOP_LOADING});
        } else if(notes.response.status >=500){
            dispatch({ type: ERROR, data: {message: notes?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (notes.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}

export const createNote = (history, noteData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const notes = await api.createNote(noteData);
        if (notes.status === 201) {
            dispatch(updateNote(history));
        } else if(notes.response.status >=500){
            dispatch({ type: ERROR, data: {message: notes?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (notes.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}

export const editNote = (history, noteData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const notes = await api.editNote(noteData);
        if (notes.status >= 200 && notes.status <=300) {
            dispatch(updateNote(history));
        } else if(notes.response.status >=500){
            dispatch({ type: ERROR, data: {message: notes?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (notes.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}

export const deleteNote = (history, noteId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const notes = await api.deleteNote(noteId);
        if (notes.status === 200) {
            dispatch(updateNote(history));
        } else if(notes.response.status >=500){
            dispatch({ type: ERROR, data: {message: notes?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (notes.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}