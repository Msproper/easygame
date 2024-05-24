import { combineReducers } from "redux";

import authReducer from "./auth";
import noteReducer from "./note";
import fileReducer from "./file";
import errorReducer from "./error";
import loadingReducer from "./loading";
import taskReducer from "./task";
export default combineReducers({
    authReducer,
    errorReducer,
    loadingReducer,
    noteReducer,
    fileReducer,
    taskReducer
});