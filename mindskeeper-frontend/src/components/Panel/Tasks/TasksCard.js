import React from 'react';
import {Avatar, Card, CardActionArea, CardContent, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import "./styles/TasksCardStyle.css"
const TaskCard = ({ taskList, setDetailMenu }) => {
    return (
        <Card className="taskCard" raised  xs={{ width: 350}}>
            <CardActionArea onClick={(e) => setDetailMenu({
                type: 3,
                data: taskList
            })}>
                <CardContent>
                    <List>
                        {taskList?.map((task, index) => (
                            <div>
                                <ListItem key={index}>
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
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default TaskCard;