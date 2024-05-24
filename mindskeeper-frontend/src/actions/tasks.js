import * as api from "../api";
import {ERROR, UPDATE_TASK } from "../constants/actionTypes";

export const updateTask = (history) => async (dispatch) => {
    try {
        const task = await api.updateTask();
        if (task.status === 200) {
            dispatch({type: UPDATE_TASK, data: task.data});
        } else if (task.response.status >= 500) {
            dispatch({type: ERROR, data: {message: task?.response?.data.message, type: "error"}});
        } else if (task.response.status >= 400) {
            dispatch({type: "ERROR", data: {message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"}})
            dispatch({type: "LOGOUT"});
        }
    } catch (e) {
        console.log(e)
    }
}

export const createTask = (history, taskData) => async (dispatch) => {
    try {
        const tasks = await api.createTask(taskData);
        if(tasks.status === 201){
            dispatch(updateTask(history));
        }else if(tasks.response.status >=500){
            dispatch({ type: ERROR, data: {message: tasks?.response?.data.message, type: "error"} });
        } else if (tasks.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            history.push('/');
        }
    } catch (e){
        console.log(e);
    }
}

export const editTask = (history, taskData) => async (dispatch) => {
    try {
        const tasks = await api.editTask(taskData);
        if(tasks.status === 200){
            dispatch(updateTask(history));
        }else if(tasks.response.status >=500){
            dispatch({ type: ERROR, data: {message: tasks?.response?.data.message, type: "error"} });
        } else if (tasks.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}

export const deleteTask = (history, groupId) => async (dispatch) => {
    try {
        const tasks = await api.deleteTask(groupId);
        if(tasks.status === 200){
            dispatch(updateTask(history));
        }else if(tasks.response.status >=500){
            dispatch({ type: ERROR, data: {message: tasks?.response?.data.message, type: "error"} });
        } else if (tasks.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}