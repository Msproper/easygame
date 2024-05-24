import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createNote, deleteNote, editNote, updateNote} from "../../actions/notes";
import {
    Backdrop, Box, CircularProgress,
    Container,
    CssBaseline,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    ThemeProvider, Typography
} from "@mui/material";

import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';

import {createTheme} from "@mui/material/styles";
import DisplayNotes from "./Notes/DisplayNotes";
import CreateNoteMenu from "./Notes/CreateNoteMenu";
import NoteDetails from "./Notes/NoteDetails";
import {deleteFile, downloadFile, updateFile, uploadFile} from "../../actions/file";
import DisplayFiles from "./Files/DisplayFiles";
import CreateFileMenu from "./Files/CreateFileMenu";
import FilesDetail from "./Files/FilesDetail";
import {createTask, editTask, updateTask, deleteTask} from "../../actions/tasks";
import DisplayTask from "./Tasks/DisplayTask";
import CreateTaskMenu from "./Tasks/CreateTaskMenu";
import TasksDetails from "./Tasks/TasksDetails";

const theme = createTheme();
const Panel = ({ history }) => {
    const dispatch = useDispatch();
    const [openTab, setOpenTab] = useState(0); //0 - none, 1 - note, 2 - file, 3 - task

    const [noteData, setNoteData] = useState({
        text: null,
        title: null,
        codeImage: null,
        error: null
    });
    const [fileData, setFileData] = useState({
        file: null,
        error: null
    });

    const [taskData, setTaskData] = useState({
        task: [],
        error: null
    })
    let backupData = {
        task: [],
        error: null
    }

    const taskDetail = (taskList) => {
        console.log(taskList);
        backupData.task = taskList.data;
        setDetailMenu({
            type: 3,
            data: taskList.data
        })
    }

    const [detailMenu, setDetailMenu] = useState({
        type: 0,
        data: null,
    })

    const notes = useSelector((state) => state.noteReducer.notes);
    const files = useSelector((state) => state.fileReducer.files);
    const tasks = useSelector((state) => state.taskReducer.tasks);

    const isLoading = useSelector((state) => state.loadingReducer.isActive);

    //Task
    const handleCreateTask = (e) => {
        e.preventDefault();
        dispatch(createTask(history, taskData.task));
        setTaskData({ task: [], error: null });
        setOpenTab(0);
    }

    const handleTaskEdit = (e, tasks) => {
        e.preventDefault();
        handleCloseDetailMenu();
        handleMenuClose();
        const arr = [];
        const oldArr = [];
        oldArr.push(...tasks);
        for(let i = 0; i<= oldArr.length; i++){
            if(oldArr[i]?.id){
                const obj = {
                    id: oldArr[i].id,
                    groupId: oldArr[i].groupId,
                    text: oldArr[i].text,
                    currentStatus: oldArr[i].currentStatus
                }
                arr.push(obj);
            }
        }
        dispatch(editTask(history, arr));
    }

    const handleTaskDelete = (e, task) => {
        e.preventDefault();
        dispatch(deleteTask(task[0].groupId));
        handleCloseDetailMenu();
        handleMenuClose();
    }
    //Note system
    const handleCreateNote = (e) => {
        e.preventDefault();
        if(noteData.text < 1){
            setNoteData({...noteData, error: "Поле не может быть пустым"})
        } else {
            dispatch(createNote(history, noteData));
            setNoteData({ text: null, error: null });
            setOpenTab(0);
        }
    }
    const handleNoteEdit = (e, note) => {
        e.preventDefault();
        if(note.text || note.text?.length > 3){
            dispatch(editNote(history, note));
        }
        handleCloseDetailMenu();
        handleMenuClose();
    }
    const handleNoteDelete = (e, note) => {
        e.preventDefault();
        dispatch(deleteNote(history, note.id));
        handleCloseDetailMenu();
        handleMenuClose();
    }

    //File system
    const handleCreateFile = (e) => {
        e.preventDefault();
        if(fileData.file){
            handleWheelClose();
            dispatch(uploadFile(fileData.file, history));
            setFileData({ file: null, error: null });
            handleWheelClose();
            setOpenTab(0);
        }
    }
    const handleFileDownload = (e, file) => {
        e.preventDefault();
        dispatch(downloadFile(history, file));
        handleCloseDetailMenu();
        handleMenuClose();

    }
    const handleFileDelete = (e, file) => {
        e.preventDefault();
        dispatch(deleteFile(history, file.id));
        handleCloseDetailMenu();
        handleMenuClose();
    }

    //Wheel
    const [isWheelOpen, setIsWheelOpen] = useState(false);
    const handleWheelOpen = () => setIsWheelOpen(true);
    const handleWheelClose = () => setIsWheelOpen(false);

    const handleMenuClose = () => {
        setNoteData({ text: null, error: null, title: null, codeImage: null });
        setFileData({ file: null, error: null })
        setTaskData({ task: [], error: null })
        setOpenTab(0)
    }
    const handleCloseDetailMenu = () => {
        if(detailMenu.type === 3){
            console.log(backupData);
            setTaskData(backupData);
        }
        setDetailMenu({
            data: null,
            type: 0
        })
    }

    useEffect(() => {
        dispatch(updateNote(history));
        dispatch(updateFile(history));
        dispatch(updateTask(history));
    }, [dispatch, history])

    return (
        <ThemeProvider theme={theme}>
            <Backdrop open={isWheelOpen} />
            <CssBaseline />
                <Container component="main" style={{marginTop: "7%"}}>
                    {
                        !isLoading ? (
                            <>
                                <CreateNoteMenu isMenuOpen={openTab === 1} handleCreateNote={handleCreateNote} noteData={noteData} setNoteData={setNoteData} handleMenuClose={handleMenuClose} />
                                <CreateFileMenu isMenuOpen={openTab === 2} handleCreateFile={handleCreateFile} fileData={fileData} setFileData={setFileData} handleMenuClose={handleMenuClose} />
                                <CreateTaskMenu isMenuOpen={openTab === 3} taskData={taskData} setTaskData={setTaskData} handleMenuClose={handleMenuClose} handleTaskCreate={handleCreateTask} />
                                { detailMenu.type === 1 && (<NoteDetails note={detailMenu.data} isMenuOpen={true}  handleNoteEdit={handleNoteEdit} handleNoteDelete={handleNoteDelete} handleCloseDetailMenu={handleCloseDetailMenu}/>) }
                                { detailMenu.type === 2 && (<FilesDetail file={detailMenu.data} isMenuOpen={true} handleFileDownload={handleFileDownload} handleFileDelete={handleFileDelete} handleCloseDetailMenu={handleCloseDetailMenu} /> ) }
                                { detailMenu.type === 3 && (<TasksDetails taskList={detailMenu.data} isMenuOpen={true} handleCloseDetailMenu={handleCloseDetailMenu} handleTaskDelete={handleTaskDelete} handleTaskUpdate={handleTaskEdit} />) }
                                <DisplayTask taskList={tasks} setDetailMenu={taskDetail}/>
                                <DisplayNotes notes={notes} setDetailMenu={setDetailMenu} />
                                <DisplayFiles files={files} setDetailMenu={setDetailMenu} />
                                {(notes === null || files===null || tasks === null) || ((notes?.length === 0) && (files?.length === 0)) && <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100vh',
                                    }}
                                >
                                    <Typography variant="h6" color="textSecondary">
                                        У Вас нет данных. Вы можете их добавить используя кнопку в углу экрана.
                                    </Typography>
                                </Box>}
                            </>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '85vh',
                                    }}
                                >
                                    <CircularProgress />
                                </Box>
                            </>
                        )
                    }

                    <SpeedDial
                        ariaLabel="Open menu"
                        sx={{ position: 'fixed', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                        onClose={handleWheelClose}
                        onOpen={handleWheelOpen}
                    >
                        <SpeedDialAction
                            icon={<EditNoteRoundedIcon />}
                            color={"primary"}
                            tooltipTitle={"Добавить заметку"}
                            onClick={() => {setOpenTab(1)}}
                        />
                        <SpeedDialAction
                            icon={<FileCopyRoundedIcon />}
                            color={"primary"}
                            tooltipTitle={"Добавить файл"}
                            onClick={() => {setOpenTab(2)}}
                        />
                        {/*<SpeedDialAction*/}
                        {/*    icon={<AddTaskRoundedIcon />}*/}
                        {/*    color={"primary"}*/}
                        {/*    tooltipTitle={"Добавить задачу"}*/}
                        {/*    onClick={() => {setOpenTab(3)}}*/}
                        {/*/>*/}
                    </SpeedDial>
                </Container>
        </ThemeProvider>
    );
};

export default Panel;