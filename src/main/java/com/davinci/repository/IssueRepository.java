package com.davinci.repository;

import com.davinci.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Integer> {

    @Query(value = "SELECT * FROM issue WHERE id_sprint = :idSprint and id_project = :idProject and state = 'CREADO' and enabled = true",nativeQuery = true)
    List<Issue> findAllIssuesAndStatusCREATEDBySprintByProject(@Param("idSprint") int idSprint, @Param("idProject") int idProject);

    @Query(value = "SELECT * FROM issue WHERE id_sprint = :idSprint and id_project = :idProject and enabled = true",nativeQuery = true)
    List<Issue> findAllBySprintByProject(@Param("idSprint") int idSprint, @Param("idProject") int idProject);

    @Query(value = "SELECT * FROM issue  WHERE BACKLOG = false and ID_PROJECT = :idProject and enabled = true", nativeQuery = true)
    List<Issue> findByBacklogIsFalseAndProjectId(@Param("idProject") Integer idProject);

    @Query(value = "SELECT * FROM issue  WHERE BACKLOG = true and ID_PROJECT = :idProject and ENABLED = true", nativeQuery = true)
    List<Issue> findByBacklogIsTrueAndProjectId(@Param("idProject") Integer idProject);

    List<Issue> findAllByEnabledIsTrue();

    List<Issue> findBySprintAndEnabledIsTrue(Integer sprintId);

    @Query(value = "SELECT * FROM issue  WHERE (STATE != 'FINALIZADO' or STATE is null) and ID_SPRINT = :sprintId and ID_PROJECT = :idProject and enabled = true", nativeQuery = true)
    List<Issue> findAllIssuesNotFinishBySprintIdByProject(@Param("sprintId") Integer sprintId, @Param("idProject") int idProject);

    @Query(value = "SELECT * FROM issue WHERE ID_SPRINT =  ?1 and enabled = true", nativeQuery = true)
    List<Issue> getIssueBySprintId(int id);

    @Query(value = "SELECT * FROM issue WHERE id_project = :idProject and enabled = true", nativeQuery = true)
    List<Issue> findAllIssuesByProject(@Param("idProject") int idProject);
}
