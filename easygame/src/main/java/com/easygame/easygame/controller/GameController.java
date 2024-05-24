package com.easygame.easygame.controller;


import com.easygame.easygame.DTO.GameDto;
import com.easygame.easygame.service.GameService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.UUID;

@Controller
@RequiredArgsConstructor
@RequestMapping("/game")
public class GameController {

    private final GameService gameService;


    @Operation(summary = "Создание игры")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody @Valid GameDto gameDto, BindingResult bindingResult) {
        return new ResponseEntity<>(gameService.create(gameDto), HttpStatus.OK);
    }

    @GetMapping("/getByUUID")
    public ResponseEntity<?> getByUUID(@RequestBody Long id){
        return new ResponseEntity<>(gameService.getById(id), HttpStatus.OK);
    }

}