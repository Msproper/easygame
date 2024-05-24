import React, { useState } from 'react';
import {Avatar, Button, TextField, Grid, Box, Typography, Container, CssBaseline} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useDispatch } from "react-redux";
import {signIn, signUp} from "../../actions/auth";

const theme = createTheme();

const Auth = ({ history }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [authData, setAuthData ] = useState({email: "", username: "", password: ""})
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isRegister){
            if(authData.email?.length < 3) return;
            dispatch(signUp(authData, history));
        } else {
            dispatch(signIn(authData, history));
        }
    }

    const handleChange = (e) => {
        setAuthData({...authData, [e.target.name]:e.target.value})
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {isRegister ? "Регистрация" : "Авторизация"}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {isRegister &&

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Почта"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                            />
                        }


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Имя пользователя"
                            name="username"
                            autoFocus
                            onChange={handleChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />

                        <Grid  container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item xs={5}>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"

                                    onClick={() => setIsRegister(!isRegister)}
                                >
                                    {isRegister ? "Войти" : "Регистрация"}
                                </Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Продолжить
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Auth;