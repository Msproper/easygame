import React from 'react';
import { Snackbar, Alert } from "@mui/material"
import Slide from '@mui/material/Slide';

const Notification = ({ open, hideDuration, close, type, message}) => {
    return (
        <Snackbar open={open} autoHideDuration={hideDuration} onClose={close} TransitionComponent={Slide}>
            <Alert  onClose={close} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;