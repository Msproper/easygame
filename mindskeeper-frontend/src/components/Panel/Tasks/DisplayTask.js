import React from 'react';
import {Grid} from "@mui/material";
import TaskCard from "./TasksCard";

const DisplayTask = ({ taskList, setDetailMenu }) => {
    return (
        <Grid styles={{ marginTop: "1px" }} container alignItems="stretch" spacing={5}>
            {taskList?.map((tasks, index) => (
                <Grid sx={{margin: 0, padding: 0}} key={index} item sm={12} md={6} lg={6} >
                    <TaskCard taskList={tasks} setDetailMenu={setDetailMenu} />
                </Grid>
            ))}
        </Grid>
    );
};

export default DisplayTask;