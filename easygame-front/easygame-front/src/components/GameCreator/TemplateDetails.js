import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    Grid, Button
} from "@mui/material";



const TemplateDetails = ({ detailMenu, handleStartGame}) => {

    return (
        <Dialog sx={{
            textAlign: 'center',
            fontWeight: 'normal',
            fontSize: '24px',
            backgroundColor: 'rgba(155, 155, 155, 0.9)',
            padding: '16px',
            borderRadius: '8px',
          }} open={detailMenu.isOpen} onClose={() => detailMenu.isOpen = false} fullWidth>
            <DialogTitle textAlign="center" fontWeight="normal" fontSize="24px">{detailMenu.template.title}</DialogTitle>
            <DialogContent sx={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                            }} 
                    style={{width: "100%"
                            }}>
                <Typography sx={{
                    textAlign:"justify",
                    marginBottom: '8px',
                    color: 'text.primary',
                    fontSize: '16px',
                }}>
                    {detailMenu.template.description}
            </Typography>
                <Typography sx={{
                    textAlign:'left',
                    marginBottom: '8px',
                    color: 'text.primary',
                    fontSize: '16px',
                }} >Создатель:{detailMenu.template.creator}</Typography>
            </DialogContent>
            <Grid container spacing={2} style={{ marginBottom: "3%" }} alignItems={'center'} justifyContent={"center"}>
                <Grid item>
                    <Button onClick={(e) => handleStartGame(detailMenu.template)} variant="contained"
                            color={"success"}>Выбрать</Button>
                </Grid>
            </Grid>
            
        </Dialog>
    );
};

export default TemplateDetails;
