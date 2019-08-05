package com.davinci.repository;

import com.davinci.model.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface SprintRepository extends JpaRepository<Sprint, Integer> {

    @Query(value = "SELECT * FROM sprint WHERE id_project = :idProject", nativeQuery = true)
    List<Sprint> findAllSprintByProject(@Param("idProject") int idProject);

    @Query(value = "SELECT * FROM sprint WHERE ?1 >= DATE_FROM and ?1 <= DATE_TO and id_project= ?2", nativeQuery = true)
    Sprint findSprintByDate(Date dateToSearch, int idProject);

    @Query(value = "SELECT * FROM sprint WHERE id_project = :idProject and is_active = true", nativeQuery = true)
    Optional<Sprint> findByIsActiveIsTrueByProject(@Param("idProject") int idProject);

    @Query(value = "SELECT SUM(iss.estimated) FROM issue iss WHERE id_sprint = ?1", nativeQuery = true)
    Integer getStoryPointBySprint(Integer id);

    @Query(value = "SELECT * FROM sprint WHERE (is_active = true or is_create = true) and id_project = :idProject ", nativeQuery = true)
    List<Sprint> findAllSprintByIsActiveIsTrueOrIsCreateIsTrueByIdProject(@Param("idProject") int idProject);
}


