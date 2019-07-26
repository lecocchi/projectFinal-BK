package com.davinci.repository;

import com.davinci.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Integer> {

    List<Issue> findAllBySprint(Integer sprint);

    @Query(value = "SELECT * FROM issue  WHERE BACKLOG = false and ID_PROJECT = :idProject", nativeQuery = true)
    List<Issue> findByBacklogIsFalseAndProjectId(@Param("idProject") Integer idProject);

    @Query(value = "SELECT * FROM issue  WHERE BACKLOG = true and ID_PROJECT = :idProject", nativeQuery = true)
    List<Issue> findByBacklogIsTrueAndProjectId(@Param("idProject") Integer idProject);

    List<Issue> findAllByEnabledIsTrue();

    List<Issue> findBySprintAndEnabledIsTrue(Integer sprintId);

    @Query(value = "SELECT * FROM issue  WHERE (STATE != 'Finalizado' or STATE is null) and ID_SPRINT = :sprintId", nativeQuery = true)
    List<Issue> findAllIssuesNotFinishBySprintId(@Param("sprintId") Integer sprintId);

    @Query(value = "SELECT * FROM issue WHERE ID_SPRINT =  ?1", nativeQuery = true)
    List<Issue> getIssueBySprintId(int id);
}
