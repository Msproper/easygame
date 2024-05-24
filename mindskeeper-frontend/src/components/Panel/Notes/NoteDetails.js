import React from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Grid, TextField, Typography} from "@mui/material";
import FileBase from "react-file-base64";

const NoteDetails = ({ note, isMenuOpen, handleCloseDetailMenu, handleNoteEdit, handleNoteDelete}) => {
    const initialState = {
        text : note.text,
        title: note.title,
        codeImage: note.codeImage
    }
    const [updateState, setUpdateState] = React.useState(initialState)

    return (
        <Dialog style={{ width: "50%", marginLeft: 'auto',marginRight: 'auto', marginTop: "20px"  }} open={isMenuOpen} onClose={handleCloseDetailMenu} fullWidth>
            <DialogTitle textAlign="center" fontWeight="normal" fontSize="24px">{"Редактор"}</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography sx={{fontSize: "18px", fontWeight: "bold", textAlign: "left"}} variant='h8' component={"p"}>
                            Заголовок заметки:
                        </Typography>
                        <TextField
                            id="standard-basic"
                            defaultValue={note.title}
                            style={{width: '100%', marginTop: '1%'}} variant="standard"
                            onChange={(e) => setUpdateState({...updateState, title: e.target.value})}
                        />
                        <Typography sx={{fontSize: "18px", fontWeight: "bold", textAlign: "left"}} variant='h8' component={"p"}>
                            Текст заметки:
                        </Typography>
                        <TextField
                            id="standard-basic"
                            defaultValue={note.text}
                            style={{width: '100%', marginTop: '1%'}} variant="standard"  multiline
                            onChange={(e) => setUpdateState({...updateState, text: e.target.value})}
                        />
                        <div style={{marginTop: "20px"}}>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setUpdateState({...updateState, codeImage: base64})}/>
                        </div>
                    </Grid>
                </Grid>
            </DialogContent>
            <Grid container spacing={2} style={{ marginBottom: "3%" }} alignItems={'center'} justifyContent={"center"}>
                <Grid item>
                    <Button onClick={(e) => handleNoteDelete(e, note)} variant="contained" color={"error"}>Удалить</Button>
                </Grid>
                {updateState !== initialState &&
                    <Grid item>
                        <Button onClick={(e) => handleNoteEdit(e, {...note, text: updateState.text, title: updateState.title, codeImage: updateState.codeImage})} variant="contained"
                            color={"success"}>Изменить</Button>
                        </Grid>}
                    <Grid item>
                    <Button onClick={handleCloseDetailMenu} variant='contained'>Отмена</Button>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default NoteDetails;