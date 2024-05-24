package com.easygame.easygame.controller;


import com.easygame.easygame.model.GameMove;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class SessionController {

    private final SimpMessageSendingOperations sendingOperations;


    @MessageMapping("/session.doMove")
    @SendTo("/session.hub")
    public GameMove sendMessage(
            @Payload GameMove gameMove
    ) {
        return gameMove;
    }

    @MessageMapping("/session.addEnemy")
    @SendTo("/session.hub")
    public GameMove addUser(
            @Payload GameMove chatMessage,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        return chatMessage;
    }
}