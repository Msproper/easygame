package com.easygame.easygame.model;


import jakarta.persistence.*;
import lombok.*;


import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Getter
@Setter
@Table(name = "questions")
public class QuestionModel {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;


    @Column(name="Question")
    private String question;

    @Column(name = "right answer")
    private Integer rightAnswer;

    @Column(name = "Answers")
    @ElementCollection
    private List<String> answers;
}