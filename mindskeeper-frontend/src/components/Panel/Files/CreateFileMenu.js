import React from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";

const CreateFileMenu = ({ fileData, setFileData, isMenuOpen, handleMenuClose, handleCreateFile }) => {
    return (
        <Dialog open={isMenuOpen} onClose={handleMenuClose}>
            <DialogTitle textAlign="center" fontWeight="bold" fontSize="24px">Загрузка файла</DialogTitle>
            <DialogContent style={{ width: '100%' }}>
                <form onSubmit={handleCreateFile}>
                    <input type="file" onChange={(e) => setFileData({...fileData, file: e.target.files[0]})}/>
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

export default CreateFileMenu;