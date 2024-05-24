package com.easygame.easygame.service;

import com.easygame.easygame.DTO.TemplateCreateDto;
import com.easygame.easygame.DTO.SuccessResponse;
import com.easygame.easygame.model.Template;
import com.easygame.easygame.model.TemplateType;
import com.easygame.easygame.model.QuestionModel;
import com.easygame.easygame.repository.TemplatesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class TemplateService {

    private final TemplatesRepository templatesRepository;
    private final UserService userService;

    private Template saveTemplate(Template game){return templatesRepository.save(game);}

    /** Процесс превращения из DTO в модель QuestionModel **/


    private List<QuestionModel> createQuestionModels(TemplateCreateDto gameCreateDto){
        var questions = gameCreateDto.getQuestion();
        var answers = gameCreateDto.getAnswers();
        return (IntStream.range(0, answers.size())
                .mapToObj(i -> QuestionModel
                        .builder()
                        .answers(answers.get(i))
                        .question(questions.get(i)).build()).toList());
    }

    /**Создание игры**/

    public SuccessResponse create(TemplateCreateDto templateCreateDto){

        saveTemplate(
                Template.builder()
                        .questionModel(createQuestionModels(templateCreateDto))
                        .creator(userService.getCurrentUser().getUsername())
                        .gameType(TemplateType.FOUR_QUESTIONS_TYPE)
                        .templatePhoto(templateCreateDto.getTemplatePhoto())
                        .description(templateCreateDto.getDescription())
                        .title(templateCreateDto.getName())
                        .build()
        );
        return SuccessResponse.builder()
                .message("Шаблон игры успешно создан!")
                .status(200)
                .build();
    }

    public List<Template> getLibrary(){
        return templatesRepository.getByCreator(userService.getCurrentUser().getUsername());

    }


    public List<Template> getAll() {
        return templatesRepository.findAll();
    }

    public void delete(Long id){
        templatesRepository.deleteById(id);
    }

    public void deleteAll(){
        templatesRepository.deleteAll();
    }

}