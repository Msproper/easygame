import React from 'react';
import {
    Avatar,
    Button,
    Dialog,
    DialogContent,
    DialogTitle, Grid, IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
const CreateTaskMenu = ({ taskData, setTaskData, isMenuOpen, handleMenuClose, handleTaskCreate }) => {
    const [newTask, setNewTask] = React.useState([]);

    const addToTaskData = (text) => {
        const currentTaskToAdd = taskData.task;
        if(taskData.task.length >= 6) return setTaskData({...taskData, error: "В одном списке может быть не более 7 задач"});
        if(text.length < 1 || text.length > 32){
            setTaskData({...taskData, error: "Длина задачи от 1 до 32 символов"});
        } else {
            currentTaskToAdd.push({text});
            setNewTask("")
            setTaskData({...taskData, task: currentTaskToAdd})
        }
    }

    const deleteFromTaskData = (index) => {
        const currentTaskToDelete = taskData.task;
        currentTaskToDelete.splice(index, 1);
        setTaskData({...taskData, task: currentTaskToDelete});
    }

    return (
        <Dialog open={isMenuOpen} onClose={handleMenuClose} fullWidth>
            <DialogTitle textAlign={"center"} fontWeight={"bold"} fontSize={"24px"}>Редактор задач</DialogTitle>
            <DialogContent style={{width: "100%"}}>
                {taskData.task?.map((task, index) => (
                    <ListItem key={index}
                      secondaryAction={
                          <IconButton edge={"end"} aria-label="delete" onClick={() => deleteFromTaskData(index)}>
                              <DeleteIcon />
                          </IconButton>
                      } style={{width: "99%"}}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={task.text}
                        />
                    </ListItem>
                ))}
                <form onSubmit={handleTaskCreate}>
                    <div style={{display: "flex", marginTop: "30px", justifyContent: "space-between", width: "100%"}}>
                        <TextField
                            id="standard-basic"
                            label="Введите задачу"
                            style={{width: '100%'}} variant="standard"  multiline
                            error={taskData.error !== null}
                            helperText={taskData.error}
                            value={newTask}
                            onChange={(e) => {
                                setNewTask(e.target.value);
                            }}
                        />
                        <Button style={{ width: "30px"}} variant="text" onClick={() => addToTaskData(newTask)}><AddCircleRoundedIcon/></Button>
                    </div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        sx={{ mt: 3 }}
                    >
                        <Button variant="contained" onClick={handleMenuClose}>Отмена</Button>
                        <Button variant="contained" sx={{ ml: 2 }} type="submit">Сохранить</Button>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTaskMenu;