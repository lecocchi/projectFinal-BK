package com.davinci.service;

import com.davinci.model.Issue;
import com.davinci.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class IssueService {

    private IssueRepository issueRepository;

    @Autowired
    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public Issue getIssueById(Integer id) {
        return this.issueRepository.findOne(id);
    }

    public List<Issue> getAllIssueBySprint(Integer sprint) {
        return this.issueRepository.findAllBySprint(sprint);
    }

    public List<Issue> getAllIssueByBacklogIsTrue() {
        return this.issueRepository.findAllByBacklogIsTrue();
    }

    public List<Issue> getAllIssueByEnabledIsTrue() {
        return this.issueRepository.findAllByEnabledIsTrue();
    }

    public List<Issue> getAllIssue() {
        return this.issueRepository.findAll();
    }

    public Issue createIssue(Issue issue) {
        issue.setCreated(new Date());
        return this.issueRepository.save(issue);
    }

    public void deleteIssue(Integer id) {
        Optional.ofNullable(this.issueRepository.findOne(id))
                .ifPresent(i -> this.issueRepository.delete(i));
    }

    public Issue updateIssue(Issue issue, Integer id) {
        return Optional.ofNullable(this.issueRepository.findOne(id))
                .map(i -> {
                    i.setAssignee(issue.getAssignee());
                    i.setBacklog(issue.getBacklog());
                    i.setEnabled(issue.getEnabled());
                    i.setEstimated(issue.getEstimated());
                    i.setLabel(issue.getLabel());
                    i.setPhase(issue.getPhase());
                    i.setPlannedEnd(issue.getPlannedEnd());
                    i.setPlannedStart(issue.getPlannedStart());
                    i.setPriority(issue.getPriority());
                    i.setRemaining(issue.getRemaining());
                    i.setReporter(issue.getReporter());
                    i.setResolved(issue.getResolved());
                    i.setSprint(issue.getSprint());
                    i.setState(issue.getState());
                    i.setTitle(issue.getTitle());
                    i.setUpdated(new Date());
                    i.setVersion(issue.getVersion());
                    i.setWatcher(issue.getWatcher());
                    return this.issueRepository.save(i);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Issue"));
    }
}
