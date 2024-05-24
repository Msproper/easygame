import * as api from "../api"
import {ERROR, START_GAME, START_LOADING, STOP_LOADING, UPDATE_TEMPLATE} from "../constants/actionTypes";


export const startGame = (history, template) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        let game = {chosenTemplate:template.id, time:300, gameType:"DUEL_TYPE"}
        const gameResponce = await api.createGame(game);
        if (gameResponce.status === 200) {
            dispatch({type: START_GAME, data: {data: gameResponce.data, template:template }});
            dispatch({type: STOP_LOADING});
            history.push('/startGame')
        } else if(gameResponce.response.status >=500){
            dispatch({ type: ERROR, data: {message: gameResponce?.response?.data.message, type: "error"} });
            dispatch({type: STOP_LOADING});
        } else if (gameResponce.response.status >= 400){
            dispatch({ type: "ERROR", data: { message: "Срок сессии вышел, войдите в аккаунт еще раз.", type: "info"} })
            dispatch({ type: "LOGOUT" });
            dispatch({type: STOP_LOADING});
            history.push('/');
        }
    } catch (e) {
        console.log(e);
    }
}