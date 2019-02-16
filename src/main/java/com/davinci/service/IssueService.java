package com.davinci.service;

import com.davinci.model.Issue;
import com.davinci.model.Sprint;
import com.davinci.repository.IssueRepository;
import com.davinci.repository.SprintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class IssueService {

    private IssueRepository issueRepository;
    private SprintRepository sprintRepository;
    private SprintService sprintService;

    @Autowired
    public IssueService(IssueRepository issueRepository, SprintRepository sprintRepository, SprintService sprintService) {
        this.issueRepository = issueRepository;
        this.sprintRepository = sprintRepository;
        this.sprintService = sprintService;
    }

    public Issue getIssueById(Integer id) {
        return this.issueRepository.findOne(id);
    }

    public List<Issue> getAllIssueBySprint(Integer sprint) {
        return this.issueRepository.findAllBySprint(sprint);
    }

    public List<Issue> getAllIssueByBacklogIsTrue() {
        return this.issueRepository.findAllByBacklogIsTrueAndEnabledIsTrue();
    }

    public List<Issue> getAllIssueByEnabledIsTrue() {
        return this.issueRepository.findAllByEnabledIsTrue();
    }

    public List<Issue> getAllIssue() {
        return this.issueRepository.findAll();
    }

    public List<Issue> getAllIssueActiveSprint() { return this.issueRepository.findAllByBacklogIsFalse(); }

    public Issue createIssue(Issue issue) {
        issue.setCreated(new Date());
        issue.setUpdated(new Date());
        issue.setEnabled(true);
        if (!issue.getBacklog()){
            Sprint activeSprint = sprintRepository.findByIsActiveIsTrue();
            if (activeSprint != null)
                issue.setSprint(activeSprint.getId());
        }
        return this.issueRepository.save(issue);
    }

    public Issue deleteIssue(Integer id) {
        Issue issueToDelete = issueRepository.findOne(id);
        if (issueToDelete != null){
            issueToDelete.setEnabled(false);
        }

        return issueRepository.save(issueToDelete);
//        Optional.ofNullable(this.issueRepository.findOne(id))
//                .ifPresent(i -> this.issueRepository.delete(i));
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
                    i.setDescription(issue.getDescription());
                    return this.issueRepository.save(i);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Issue"));
    }

    public Issue setIssueInActiveSprint(Integer issueId){
        Sprint activeSprint = sprintRepository.findByEnabledIsTrue();

        Issue issue = issueRepository.findOne(issueId);
        issue.setSprint(activeSprint.getId());
        issue.setBacklog(false);

        return issueRepository.save(issue);
    }

    public List<Issue> getIssuesBySprintId(Integer sprintId){
        return issueRepository.findBySprintAndEnabledIsTrue(sprintId);
    }

    public Issue addIssueInBacklog(final Issue issue){
        issue.setBacklog(true);
        issue.setSprint(null);
        return issueRepository.save(issue);
    }

    public List<Issue> getAllIssueOpenInActiveSprint(){
        return findAllIssueIsNotFinishByActiveSprint();
    }

    private List<Issue> findAllIssueIsNotFinishByActiveSprint(){
        Sprint activeSprint = sprintRepository.findByIsActiveIsTrue();
        return issueRepository.findAllIssuesNotFinishBySprintId(activeSprint.getId());
    }
}