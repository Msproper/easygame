package com.easygame.easygame.service;

import com.easygame.easygame.DTO.GameDto;
import com.easygame.easygame.DTO.SuccessResponse;
import com.easygame.easygame.DTO.TemplateCreateDto;
import com.easygame.easygame.model.Game;
import com.easygame.easygame.model.QuestionModel;
import com.easygame.easygame.model.Template;
import com.easygame.easygame.model.TemplateType;
import com.easygame.easygame.repository.GamesRepository;
import com.easygame.easygame.repository.TemplatesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class GameService {

    private final GamesRepository gamesRepository;

    public Long create(GameDto gameDto){
        final Long id = new Random().nextLong(100000)+1;
        gamesRepository.save(Game.builder()
                        .id(id)
                .chosenTemplate(gameDto.getChosenTemplate())
                .time(gameDto.getTime())
                .sessionType(gameDto.getSessionType())
                .build());
        return id;
    }

    public Game getById(Long id) {
        return gamesRepository.getById(id);
    }

}