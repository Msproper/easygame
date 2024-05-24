import React from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import FileBase from "react-file-base64";

const CreateNoteMenu = ({ noteData, setNoteData, isMenuOpen, handleMenuClose, handleCreateNote }) => {
    return (
        <Dialog open={isMenuOpen} onClose={handleMenuClose}>
            <DialogTitle textAlign="center" fontWeight="bold" fontSize="24px">Создание заметки</DialogTitle>
            <DialogContent style={{ width: '100%' }}>
                <form onSubmit={handleCreateNote}>
                    <TextField
                        id="standard-basic"
                        label="Введите заголовок"
                        style={{width: '100%'}} variant="standard"  multiline
                        error={noteData.error !== null}
                        helperText={noteData.error}
                        onChange={(e) => setNoteData({...noteData, title: e.target.value })}
                    />
                    <TextField
                        id="standard-basic"
                        label="Введите текст"
                        style={{width: '100%'}} variant="standard"  multiline
                        error={noteData.error !== null}
                        helperText={noteData.error}
                        onChange={(e) => setNoteData({...noteData, text: e.target.value })}
                    />
                    <div style={{marginTop: "20px"}}>
                        <FileBase type="file" multiple={false} onDone={({base64}) => setNoteData({...noteData, codeImage: base64})}/>
                    </div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        sx={{ mt: 3 }}
                    >
                        <Button variant="contained" onClick={handleMenuClose}>Отмена</Button>
                        <Button variant="contained" sx={{ ml: 2 }} type="submit">Отправить</Button>
                    </Grid>
                </form>
            </DialogContent>

        </Dialog>
    );
};

export default CreateNoteMenu;