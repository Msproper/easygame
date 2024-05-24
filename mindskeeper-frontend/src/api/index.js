import axios from "axios";
import FormData from 'form-data';

//const API = axios.create({baseURL: "http://localhost:8080"});
const API = axios.create({baseURL: "https://mindskeeper.mshembelev.site:8080"});

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

//Note
export const updateNote = async () => {
    updateAPI();
    const data = await API.get('/note/').catch(error => error);
    return data;
}

export const createNote = async (noteData) => {
    updateAPI();
    const data = await API.post('/note/', noteData).catch(error => error);
    return data;
}

export const editNote = async (noteData) => {
    updateAPI();
    const data = await API.post('/note/update', noteData).catch(error => error);
    return data;
}

export const deleteNote = async (noteId) => {
    updateAPI();
    const data = await API.delete(`/note/${noteId}`).catch(error => error);
    return data;
}
//Task
export const updateTask = async () => {
    updateAPI();
    const data = await API.get("/task/").catch(error => error);
    return data;
}

export const createTask = async (taskData) => {
    updateAPI();
    const data = await API.post("/task/", taskData).catch(error => error);
    return data;
}

export const editTask = async (taskData) => {
    updateAPI();
    const data = await API.post("/task/group/update", taskData).catch(error => error);
    return data;
}

export const deleteTask = async (groupId) => {
    updateAPI();
    const data = await API.delete("/task/"+groupId).catch(error => error);
    return data;
}
//File
export const updateFile = async () => {
    updateAPI();
    const data = await API.get("/file/").catch(error => error);
    return data;
}

export const uploadFile = async (file) => {
    updateAPI();
    const formData = new FormData();
    formData.append('file', file);
    const data = await API.post("/file/", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }}).catch(error => error);
    return data;
}

export const deleteFile = async (fileId) => {
    updateAPI();
    const data = await API.delete(`/file/${fileId}`).catch(error => error);
    return data;
}

export const downloadFile = async (file) => {
    updateAPI()
    try {
        const response = await API.get(`/file/download/${file.id}`, { responseType: 'blob' });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;

        link.setAttribute('download', file.name);

        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);

        return response;
    } catch (error) {
        console.error('Ошибка при скачивании файла:', error);
        return error;
    }
}