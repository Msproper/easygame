import React from 'react';
import { Provider } from "react-redux";
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import {thunk} from "redux-thunk";
import {createRoot} from "react-dom";


//const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
