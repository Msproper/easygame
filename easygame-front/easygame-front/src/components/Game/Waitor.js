import { Box } from "@mui/material";
import { useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";




export const Waitor = () => {

    const [isStart, setIsStart] = useState(false) 

    const WS_URL = "ws://localhost:8080/ws";
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL, {
    share: false,
    shouldReconnect: () => true,
    });

    useEffect(() => {
    console.log("Connection state changed");
    if (readyState === ReadyState.OPEN) {
        sendJsonMessage({
        event: "subscribe",
        data: {
            channel: "general-chatroom",
        },
        });
    }
    }, [readyState]);

    useEffect(() => {
    console.log(`Got a new message: ${lastJsonMessage}`);
    }, [lastJsonMessage]);

    return (
    <Box>
        {!isStart? (<Box>STARTED</Box>) : (<Box>NOT STARTED</Box>)}
    </Box>
    )
    };

    