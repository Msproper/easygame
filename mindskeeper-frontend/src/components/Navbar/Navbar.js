import React, {useState, useEffect} from 'react';
import {AppBar, Box, Button, Toolbar, Typography, Avatar} from "@mui/material";
import { useLocation } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import Notification from "../Utils/Notification";


const Navbar = ({ history }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const errors = useSelector(data => data.errorReducer);
    const [open, setOpen] = useState(false);


    const auth = useSelector(data => data.user);
    function logOut() {
        setUser(null);
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "ERROR", data: { message: "Вы успешно вышли с аккаунта!", type: "info"} })
        history.replace('/');
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
        if(errors.message){
            setOpen(true);
        }
    }, [location, dispatch, errors, auth]);

    const handleClose = () => {
        setOpen(false);
        dispatch({ type: "CLEARERROR" })
    }
    return (
        <Box>
            {open && <Notification open={open} hideDuration={3000} close={handleClose} type={errors?.type} message={errors?.message}/> }
            <AppBar position={"fixed"}>
                <Toolbar>
                    <Avatar alt={"M"} sx={{mr: 1, bgcolor: "#ffffff"}}>-</Avatar>
                    <Typography variant={"h6"} component={"div"} sx={{flexGrow: 1, fontWeight: "500"}}>
                        MindsKeeper
                    </Typography>

                    {
                        user ? (
                            <>
                                <Avatar sx={{bgcolor: "#a1139e" }} >{user.username[0]}</Avatar>
                                <Typography variant="h6" component="div" sx={{mr: 5, ml:2}}>{user.username}</Typography>
                                <Button variant="contained" color="error" onClick={logOut}>Выйти</Button>
                            </>
                        ) : (
                            <Button onClick={() => history.push('/auth')} color={"inherit"}>Login</Button>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar;