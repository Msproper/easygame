package com.easygame.easygame.repository;


import com.easygame.easygame.model.Game;
import com.easygame.easygame.model.Template;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;


@Repository
public interface GamesRepository extends JpaRepository<Game, Long> {

}
