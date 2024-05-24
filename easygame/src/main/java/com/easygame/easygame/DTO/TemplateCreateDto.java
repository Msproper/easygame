package com.easygame.easygame.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TemplateCreateDto {
    @NotNull
    private String name;
    private String description;

    @NotNull
    private Integer templatePhoto;

    @NotNull
    private List<String> question;
    @NotNull
    private List<List<String>> answers;
}