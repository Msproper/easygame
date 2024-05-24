package com.easygame.easygame.repository;


import com.easygame.easygame.model.Template;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TemplatesRepository extends JpaRepository<Template, Long> {
    List<Template> getByCreator(String creator);
}
