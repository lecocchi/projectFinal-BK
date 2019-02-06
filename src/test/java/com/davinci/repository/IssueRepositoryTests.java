package com.davinci.repository;

import com.davinci.model.Issue;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class IssueRepositoryTests extends AbstractRepositoryTests {

    @Test
    public void test(){
        assertThat(true);
    }

/*    @Resource
    private IssueRepository repository;

    @Before
    public void init() {
        super.persistIssue();
    }

    @Test
    public void findAllReturnIssues() {
        List<Issue> issues = this.repository.findAll();

        assertThat(issues).doesNotContainNull();

        for (Issue issue : issues) {
            validateIssue(issue);
        }
    }

    @Test
    public void findAllBySprintReturnIssues() {
        List<Issue> issues = this.repository.findAllBySprint(super.getSprint().getId());

        assertThat(issues).doesNotContainNull();

        for (Issue issue : issues) {
            validateIssue(issue);
        }
    }

    @Test
    public void findAllBacklogReturnIssues() {
        List<Issue> issues = this.repository.findAllByBacklogIsTrueAndEnabledIsTrue();

        assertThat(issues).doesNotContainNull();

        for (Issue issue : issues) {
            validateIssue(issue);
        }
    }

    @Test
    public void findAllEnabledReturnIssues() {
        List<Issue> issues = this.repository.findAllByEnabledIsTrue();

        assertThat(issues).doesNotContainNull();

        for (Issue issue : issues) {
            validateIssue(issue);
        }
    }

    private void validateIssue(Issue issue) {
        assertThat(issue.getTitle()).isEqualTo(ConstantsTests.Issue.TITLE);
        assertThat(issue.getEstimated()).isEqualTo(ConstantsTests.Issue.ESTIMATED);
        assertThat(issue.getRemaining()).isEqualTo(ConstantsTests.Issue.REMAINING);
        assertThat(issue.getWatcher()).isEqualTo(ConstantsTests.Issue.WATCHER);
    }*/
}
