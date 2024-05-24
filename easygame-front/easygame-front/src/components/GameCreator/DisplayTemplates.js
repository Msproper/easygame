import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import TemplateElement from "./TemplateElement";
import { getTemplates } from '../../api'; 
const DisplayTemplates = ({templates, setDetailMenu}) => {

    return (
        <Grid container alignItems="stretch" spacing={5}>
            {templates?.map((template, index) => (
                <Grid key={index} item sm={6} md={4} lg={3}>
                    <TemplateElement 
                        template={template} 
                        setDetailMenu={setDetailMenu}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default DisplayTemplates