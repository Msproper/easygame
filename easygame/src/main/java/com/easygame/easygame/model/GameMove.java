package com.easygame.easygame.model;


import lombok.*;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class GameMove {
    private Integer choice;
    private String user;
}
