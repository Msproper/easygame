import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import "./styles/NotesCardStyle.css"

const NotesCard = ({ note, setDetailMenu }) => {
    return (
        <Card  className="card" raised elevation={6} xs={{ width: 350}}>
            <CardActionArea onClick={(e) => {setDetailMenu({
                type: 1,
                data: note
            })}}>
                {
                    note?.codeImage &&  <CardMedia
                        component="img"
                        image={note.codeImage}
                        alt="Text Photo"
                    />
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {note.title}
                    </Typography>
                    <Typography  variant="body2" color="text.secondary">
                        {note.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NotesCard;