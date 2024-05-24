import { combineReducers } from "redux";

import authReducer from "./auth";
import errorReducer from "./error";
import templateReducer from "./template";
import loadingReducer from "./loading";

export default combineReducers({
    templateReducer,
    authReducer,
    errorReducer,
    loadingReducer,
});