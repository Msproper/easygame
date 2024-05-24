import React, {useState, useEffect} from 'react';
import {    Backdrop, Box, CircularProgress,
    Container,
    CssBaseline,
    ThemeProvider, Typography,
    createTheme} from "@mui/material";

import DisplayTemplates from './DisplayTemplates';
import TemplateDetails from './TemplateDetails'
import { useDispatch, useSelector } from 'react-redux';
import {updateAllTemplates} from '../../actions/templates'
import { startGame } from '../../actions/game';


const GameCreator= ({history}) => {
    const theme = createTheme()

    const dispatch = useDispatch()

    const [detailMenu, setDetailMenu] = useState({template:null, isOpen:false})

    const templates = useSelector((state) => state.templateReducer.templates)

    const isLoading = useSelector((state) => state.loadingReducer.isActive)

    useEffect(() => {dispatch(updateAllTemplates(history))},
     [dispatch, history])

    const [isWheelOpen, setIsWheelOpen] = useState(false);
    const handleWheelOpen = () => setIsWheelOpen(true);
    const handleWheelClose = () => setIsWheelOpen(false);

    const handleStartGame = (template) => dispatch(startGame(history, template))
 
    return(
    <ThemeProvider theme={theme}>
        {console.log(templates)}
        {console.log(history)}
        <Backdrop open={isWheelOpen} />
        <CssBaseline />
            <Container component="main" style={{marginTop:'7%'}}>
                {
                !isLoading ? (<>
                        {detailMenu.isOpen && <TemplateDetails detailMenu={detailMenu} handleStartGame={handleStartGame}/>}
                        {templates && <DisplayTemplates templates={templates} setDetailMenu={setDetailMenu}/>} 
                    </>) : (<>
                                <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '85vh',
                                    }}>
                                    <CircularProgress />
                                </Box>
                            </>
                        )
                    }
            </Container>
    </ThemeProvider>)
};


export default GameCreator;