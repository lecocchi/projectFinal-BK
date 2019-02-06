package com.davinci.repository;

import com.davinci.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Integer> {

    List<Issue> findAllBySprint(Integer sprint);

    List<Issue> findAllByBacklogIsFalse();

    List<Issue> findAllByBacklogIsTrueAndEnabledIsTrue();

    List<Issue> findAllByEnabledIsTrue();

    List<Issue> findBySprintAndEnabledIsTrue(Integer sprintId);
}
