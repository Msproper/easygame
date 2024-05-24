import React, {useState} from 'react';
import { Container, Box, Typography, Button, Modal } from "@mui/material"


// user? history.push("/createRoom") : history.push('/auth')

const Home = ({user, history}) => {
        const [open, setOpen] = useState(false);

        const handleSetOpen = () => {
            user ? setOpen(!open) : history.push("/auth")
        }
    
        return (
            <Container>
                <Box sx={{ textAlign: 'center', mt: 8}}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{marginTop:'300px'}}>
                        Добро пожаловать в EasyGame
                    </Typography>
                    <Typography variant="h5" color="textSecondary" paragraph sx={{ mt: 2 }}>
                        Сыграйте в свой любимый квиз с кем угодно!
                    </Typography>
                    <Typography variant="h6" color="textSecondary" paragraph sx={{ mt: 2 }}>
                        От вас лишь требуется создать комнату и передать другу код!
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                        onClick={handleSetOpen}
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{m:6}}
                    >
                        Попробовать!
                    </Button>
                        <Modal
                            open={open}
                            onClose={()=>setOpen(!open)}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <Box sx={{ position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            bgcolor: 'background.paper', 
                            boxShadow: '0 0 10px #FFF8DC, 0 0 30px #f0f000',
                            borderRadius: '10px',
                            padding: '20px',
                            backgroundColor: '#ffffff',
                            color: '#000000', 
                            p: 4,
                             }}>
                                <Typography variant='h5' fontWeight="bold">Выберите</Typography>
                                <Typography variant='h6'>Вы хотите создать свой квиз? Или выбрать готовый?</Typography>
                                <Box sx={{ display:"flex"}}>
                                <Button variant="contained" sx={{
                                                            m: 3,
                                                            bgcolor: 'transparent',
                                                            color: '#000',
                                                            backgroundColor:"#E6E6FA",
                                                            '&:hover': {
                                                            backgroundColor: '#F5F5DC',
                                                            },
                                                            animation: '$glow 2s infinite alternate',
                                                        }} 
                                    onClick={() => {history.push("/gameCreator")} }>Выбрать готовый</Button>
                                <Button variant="contained" sx={{
                                                            m: 3,
                                                            bgcolor: 'transparent',
                                                            color: '#000',
                                                            backgroundColor:"#E6E6FA",
                                                            '&:hover': {
                                                            backgroundColor: '#F5F5DC',
                                                            },
                                                            animation: '$glow 2s infinite alternate',
                                                        }} 
                                    onClick={() => {history.push("/templateCreator")}}>Создать</Button></Box>
                            </Box>
                        </Modal>
                    <Button
                        onClick={() => user? history.push("/connectToGame") : history.push('/auth')}
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{m:6}}
                    >
                        Подключится к игре
                    </Button>
                </Box>
            </Container>
        );
    };

export default Home;

