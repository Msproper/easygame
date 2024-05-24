import React from 'react';
import { Container, Box, Typography, Button, Grid } from "@mui/material"

const Home = ({user, history}) => {
    return (
        <Container>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    Добро пожаловать в Mindskeeper
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph sx={{ mt: 2 }}>
                    Демонстрация возможностей работы с API для хранения файлов и заметок.
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph sx={{ mt: 2 }}>
                    Управляйте данными легко и эффективно с pet проектом.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                    onClick={() => user? history.push("/panel") : history.push('/auth')}
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Начать
                </Button>
            </Box>
        </Container>
    );
};

export default Home;

