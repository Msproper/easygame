package com.easygame.easygame.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Getter
@Setter
@Table(name = "sessions")
public class Game {
    @Id
    @Column(name = "id")
    @GeneratedValue()
    private Long id;

    @Column(name = "time for game")
    private Integer time;

    @Column(name = "chosen template")
    private Integer chosenTemplate;

    @Column(name = "game type")
    private SessionType sessionType;

}
