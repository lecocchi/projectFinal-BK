package com.davinci.repository;

import com.davinci.model.Issue;
import com.davinci.model.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface SprintRepository extends JpaRepository<Sprint, Integer> {

    @Query(value = "SELECT * FROM sprint WHERE ?1 >= DATE_FROM and ?1 <= DATE_TO", nativeQuery = true)
    Sprint findSprintByDate(Date dateToSearch);

    Optional<Sprint> findByIsActiveIsTrue();

    @Query(value = "SELECT SUM(iss.estimated) FROM issue iss WHERE id_sprint = ?1", nativeQuery = true)
    Integer getStoryPointBySprint(Integer id);
}
