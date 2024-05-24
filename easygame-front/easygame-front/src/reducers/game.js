import { START_GAME  } from "../constants/actionTypes";
const initialState = {
    gameId: null,
    template: null,
}
const gameReducer = (state = initialState, action) => {
    switch (action.type){
        case START_GAME:
            return { ...state, gameId: action?.data.data, template: action?.data.template }
        default:
            return state;
    }
}

export default gameReducer;