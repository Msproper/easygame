import React, {useEffect, useState} from 'react';

import DocumentIcon from "../../../images/docs.png";
import ApplicationIcon from "../../../images/unknown-file.png";
import ImageIcon from "../../../images/image.png";
import ArchiveIcon from "../../../images/folder.png";
import FileIcon from "../../../images/file.png";

import {Button, Dialog, DialogContent, DialogTitle, DialogActions, Grid} from "@mui/material";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';

const FilesDetail = ({ file, isMenuOpen, handleCloseDetailMenu, handleFileDownload, handleFileDelete}) => {
    const [cardImage, setCardImage] = useState(null);

    useEffect(() => {
        let ext = file.name;
        let type = file.memeType.slice(0, file.memeType.indexOf('/'));
        for(let i = 0; i<5; i++){
            if(ext.indexOf('.') === -1){
                break;
            } else {
                ext = file.name.slice(file.name.indexOf('.')+1);
            }
        }
        if(type === "text" || ext === "docx"|| ext === "accdb" || ext === "pdf"){
            setCardImage(DocumentIcon);
        } else if((type === "application" || ext === "exe" ) && (ext !== "reg" && ext !== "sql" && ext !== "rar" && ext !== "zip")){
            setCardImage(ApplicationIcon);
        } else if(type === "image" || ext === "png" || ext === "jpg"){
            setCardImage(ImageIcon);
        } else if(ext === "rar" || ext === "zip"){
            setCardImage(ArchiveIcon);
        } else {
            setCardImage(FileIcon);
        }
    }, [file.memeType, file.name])


    return (
        <Dialog open={true} onClose={handleCloseDetailMenu}>
            <DialogTitle textAlign="center" fontWeight="normal" fontSize="24px">{file.name}</DialogTitle>
            <DialogContent>
                <Grid alignItems={"center"} >
                   <img src={cardImage} alt={file.name} />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Grid container spacing={2} alignItems={'center'} justifyContent={"center"}>
                    <Grid item>
                        <Button onClick={(e) => handleFileDelete(e, file)} variant="contained" color={"error"}>Удалить&nbsp;<DeleteIcon /></Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleCloseDetailMenu} variant='contained'>Отмена</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={(e) => handleFileDownload(e, file)} variant="contained" color={"success"}>Загрузить &nbsp;<CloudDownloadIcon /></Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};

export default FilesDetail;