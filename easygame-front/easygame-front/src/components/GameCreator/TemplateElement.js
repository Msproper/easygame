import React, {useState} from 'react';
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography} from "@mui/material";
import photo1 from "./templatePhotos/1.jpg"
import photo2 from "./templatePhotos/2.jpg"
import photo3 from "./templatePhotos/3.jpg"
import photo4 from "./templatePhotos/4.jpg"
const photoPaths = {
    1: photo1,
    2: photo2,
    3: photo3,
    4: photo4,
  };

const TemplateElement = ({template, setDetailMenu}) => {
    const photoPath = photoPaths[template.templatePhoto];
    return (
        <Card variant='outlined' sx={{  maxHeight: "300px", mt: 10, width: "250px", border: 'none', 
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)', 
        borderRadius: '8px'}}>
            <CardActionArea onClick={(e) => {setDetailMenu(
                {   
                    template:template,
                    isOpen:true,
                }
                    )}}>
                <CardMedia
                    component="img"
                    height= "140px"
                    width= "40px"
                    image= {photoPath}
                    alt= {"bir"}
                    sx={{ borderRadius: '10%', overflow: 'hidden' }}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography sx={{fontSize: "20px", fontWeight: "bold", textAlign: "center"}} variant='h5' component={"p"}>
                                {template.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default TemplateElement