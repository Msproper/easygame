import React, {useState, useEffect} from 'react';
import {AppBar, Box, Button, Toolbar, Typography, Avatar} from "@mui/material";
import { useLocation } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import Notification from "../Utils/Notification";
import Logo from "./Logo.png";

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
        <Box  >
            {open && <Notification open={open} hideDuration={3000} close={handleClose} type={errors?.type} message={errors?.message}/> }
            <AppBar position={"fixed"} sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Avatar src={Logo} sx={{ mr: 3, bgcolor: "blue" }} onClick={() => history.push('/')}>E</Avatar>
          <Typography variant="h6" component={"div"} color="error" onClick={() => history.push('/')} sx={{
              flexGrow: 2,
              justifyContent: 'space-between',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.5rem',
              color: 'Red',
            }}>EasyGame</Typography>

                    {
                    user? (
                        <>
                        <Avatar sx={{ bgcolor: "#a1139e" }}>{user.username[0]}</Avatar>
                        <Typography variant="h6" component="div" sx={{ mr: 5, ml: 2 }}>{user.username}</Typography>
                        <Button variant="contained" color="error" onClick={logOut}>Выйти</Button>
                        </>
                    ) : (
                        <Button onClick={() => history.push('/auth')} variant="contained" color={"error"}>Login</Button>
                    )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar;