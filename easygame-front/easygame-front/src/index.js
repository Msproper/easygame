import React from 'react';
import { Provider } from "react-redux";
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import {thunk} from "redux-thunk";
import {createRoot} from "react-dom";
import { Container } from "@mui/material"



const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Container sx={{ backgroundSize:'cover', height:500}}>
    <Provider store={store}>
        <App />
    </Provider>
    </Container>
);
