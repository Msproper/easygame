package com.easygame.easygame.model;


import jakarta.persistence.*;
import lombok.*;


import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Getter
@Setter
@Table(name = "games")
public class Template {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="template photo")
    private Integer templatePhoto;

    @Column(name = "game type")
    private TemplateType gameType;

    @Column(name="question id")
    @OneToMany(cascade = CascadeType.ALL)
    private List<QuestionModel> questionModel;

    @Column(name="creator", nullable = false)
    private String creator;
}
