package com.easygame.easygame.DTO;

import com.easygame.easygame.model.SessionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameDto {
    @NotNull
    private Integer time;
    @NotNull
    private Integer chosenTemplate;
    @NotNull
    private SessionType sessionType;

}