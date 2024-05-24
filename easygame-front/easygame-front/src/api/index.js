import axios from "axios";
import FormData from 'form-data';

//const API = axios.create({baseURL: "http://localhost:8080"});
const API = axios.create({baseURL: "http://localhost:8080"});

const updateAPI = () => {
    if(localStorage.getItem("token")) {
        API.defaults.headers['Authorization'] = `Bearer ` + JSON.parse(localStorage.getItem("token"));
    }
}

//User
export const signUp = async (authData) => {
    updateAPI();
    API.defaults.headers['Authorization'] = null;
    const data = await API.post('/auth/sign-up', authData).catch(error => error);
    return data;
}

export const signIn = async (authData) => {
    updateAPI();
    API.defaults.headers['Authorization'] = null;
    const data = await API.post('/auth/sign-in', authData).catch(error => error);
    return data;
}

export const updateUser = async () => {
    updateAPI();
    const data = await API.post('/auth/update').catch(error => error);
    return data;
}

export const updateTemplates = async () => {
    updateAPI();
    const data = await API.get('/templates/').catch(error => error);
    return data;
}

export const getTemplates = async () => {
    updateAPI();
    const data = await API.get('/templates/').catch(error => error);
    return data;
}

export const createGame = async (game) => {
    updateAPI();
    const data = await API.post("/game/create", game).catch(error => error);
    console.log(data)
    return data;
}
