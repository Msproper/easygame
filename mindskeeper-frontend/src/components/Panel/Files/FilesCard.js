import React, {useEffect, useState} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid, CardActionArea} from "@mui/material"
import FileIcon from "../../../images/file.png";
import ImageIcon from "../../../images/image.png";
import DocumentIcon from "../../../images/docs.png";
import ArchiveIcon from "../../../images/folder.png";
import ApplicationIcon from "../../../images/unknown-file.png";

const FilesCard = ({file, setDetailMenu}) => {
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
        <Card variant='outlined' sx={{  minheight: "300px", mt: 1, maxwidth: "250px", border: 'none' }}>
            <CardActionArea onClick={(e) => {setDetailMenu({
                type: 2,
                data: file
            })}}>
                <CardMedia
                    component="img"
                    maxHeight= "70px"
                    maxWidth= "40px"
                    image= {cardImage}
                    alt= {file.name}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography sx={{fontSize: "18px", fontWeight: "bold", textAlign: "center"}} variant='h8' component={"p"}>
                                {file.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default FilesCard;