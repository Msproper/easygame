import React from 'react';
import {Grid, Typography} from "@mui/material";
import NotesCard from "./NotesCard";

const DisplayNotes = ({ notes, setDetailMenu }) => {
    return (
        <Grid style={{ marginTop: "20px" }} container alignItems="stretch" spacing={5}>
            {notes?.map((note, index) => (
                <Grid key={index} item sm={6} md={3} lg={3} >
                    <NotesCard note={note} setDetailMenu={setDetailMenu} />
                </Grid>
            ))}
        </Grid>
    );
};

export default DisplayNotes;