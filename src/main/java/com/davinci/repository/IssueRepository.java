package com.davinci.repository;

import com.davinci.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Integer> {

    List<Issue> findAllBySprint(Integer sprint);

    List<Issue> findAllByBacklogIsTrue();

    List<Issue> findAllByEnabledIsTrue();
}
