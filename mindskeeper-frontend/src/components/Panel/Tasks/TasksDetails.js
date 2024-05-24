import React, { useState, useEffect } from 'react';
import {
    Avatar, Button, Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import "./styles/TasksCardStyle.css"

const TasksDetails = ({ taskList, isMenuOpen, handleCloseDetailMenu, handleTaskUpdate, handleTaskDelete }) => {
    const [localTaskList, setLocalTaskList] = useState([]);

    useEffect(() => {
        if (taskList) {
            setLocalTaskList([...taskList]);
        }
    }, [taskList]);

    const changeCurrentStatus = (e, index) => {
        e.preventDefault();
        const editedArray = [...localTaskList];
        editedArray[index].currentStatus = !editedArray[index].currentStatus;
        setLocalTaskList(editedArray);
    }
    //
    // const filterTaskList = () => {
    //
    //     setLocalTaskList(arr);
    // }

    return (
        <Dialog  open={isMenuOpen} onClose={handleCloseDetailMenu} fullWidth>
            <DialogTitle textAlign="center" fontWeight="normal" fontSize="24px">{"Редактор задач"}</DialogTitle>
            <DialogContent style={{width: "100%"}}>
                <Grid >
                    <List>
                        {localTaskList.map((task, index) => (
                            <div key={index}>
                                <ListItem
                                    onClick={(e) => changeCurrentStatus(e, index)}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={task.currentStatus ? task.text : "Done"}
                                    />
                                </ListItem>
                            </div>
                        ))}
                    </List>
                </Grid>
            </DialogContent>
            <Grid container spacing={2} style={{ marginBottom: "3%" }} alignItems={'center'} justifyContent={"center"}>
                <Grid item>
                    <Button onClick={(e) => handleTaskDelete(e, localTaskList)} variant="contained" color={"error"}>Удалить</Button>
                </Grid>
                <Grid item>
                    <Button onClick={(e) => handleTaskUpdate(e, localTaskList)} variant="contained"
                            color={"success"}>Изменить</Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleCloseDetailMenu} variant='contained'>Отмена</Button>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default TasksDetails;
