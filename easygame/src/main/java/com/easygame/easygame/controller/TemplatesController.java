package com.easygame.easygame.controller;


import com.easygame.easygame.DTO.TemplateCreateDto;
import com.easygame.easygame.service.TemplateService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/templates")
@RequiredArgsConstructor
@Tag(name = "Создание сессий")
public class TemplatesController {

    private final TemplateService templateService;


    @Operation(summary = "Создание игры")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody @Valid TemplateCreateDto gameCreateDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) return new ResponseEntity<>("fewfwefwefw", HttpStatus.OK);
        return new ResponseEntity<>(templateService.create(gameCreateDto), HttpStatus.OK);
    }

    @Operation(summary = "Получить библиотеку созданных игр")
    @PostMapping("/byUser")
    public ResponseEntity<?> library() {
        return new ResponseEntity<>(templateService.getLibrary(), HttpStatus.OK);
    }

    @Operation(summary = "Получить библиотеку всех игр")
    @GetMapping("/")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(templateService.getAll(), HttpStatus.OK);
    }

    @Operation(summary = "Удалить все игры")
    @DeleteMapping("/{template_id}")
    public void delete(@PathVariable("template_id") Long id) {
        templateService.delete(id);
    }

    @Operation(summary = "Удалить все игры")
    @DeleteMapping("/")
    public void delete() {
        templateService.deleteAll();
    }
}

