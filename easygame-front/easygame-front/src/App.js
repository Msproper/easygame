import React, {useState, useEffect} from 'react';
import {Route, Routes, unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import { Container } from "@mui/material"
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import { useDispatch } from "react-redux";
import {updateUser} from "./actions/auth";
import GameCreator from "./components/GameCreator/GameCreator";
import templateConstruct from './components/TemplateCreator/templateConstruct';
import { Waitor } from './components/Game/Waitor';




const history = createBrowserHistory({ window });

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const auth = useSelector(data => data);
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [auth]);


    useEffect(() => {
        if(JSON.parse(localStorage.getItem("token"))){
            dispatch(updateUser(history));
        }
    }, [dispatch])
  return (
      <HistoryRouter history={history}>
        <Container >
          <Navbar history={history} />
          <Routes>
            <Route path="/" element={<Home user={user} history={history}/>}/>
            <Route path="/auth"  element={<Auth history={history}/>} />
            <Route path="/gameCreator" element={<GameCreator history={history}/>}/>
            <Route path="/templateCreator" element={<templateConstruct/>}/>
            <Route path="/startGame" element={<Waitor></Waitor>}/>
          </Routes>
        </Container>
      </HistoryRouter>
  );
}

export default App;
