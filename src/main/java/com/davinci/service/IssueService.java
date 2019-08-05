package com.davinci.service;

import com.davinci.exceptions.ActiveSprintNotFoundException;
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

    public List<Issue> getAllIssueBySprintByProject(Integer sprintId, int idProject) {
        return this.issueRepository.findAllBySprintByProject(sprintId, idProject);
    }

    public List<Issue> getAllIssueByBacklogIsTrue(int id) {
        return this.issueRepository.findByBacklogIsTrueAndProjectId(id);
    }

    public List<Issue> getAllIssueByEnabledIsTrue() {
        return this.issueRepository.findAllByEnabledIsTrue();
    }

    public List<Issue> getAllIssue() {
        return this.issueRepository.findAll();
    }

    public List<Issue> getAllIssueActiveSprint(int idProject) { return this.issueRepository.findByBacklogIsFalseAndProjectId(idProject); }

    public Issue createIssue(Issue issue) {
        issue.setCreated(new Date());
        issue.setUpdated(new Date());
        issue.setEnabled(true);
        if (!issue.getBacklog()){

            Optional<Sprint> activeSprintOptional = sprintRepository.findByIsActiveIsTrueByProject(issue.getIdProject());

            if (!activeSprintOptional.isPresent())
                throw new ActiveSprintNotFoundException("No existe ningún sprint activo");

            issue.setSprint(activeSprintOptional.get().getId());
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

        Issue issueToUpdate = this.issueRepository.findOne(id);

        issueToUpdate.setAssignee(issue.getAssignee());
        issueToUpdate.setBacklog(issue.getBacklog());
        issueToUpdate.setEnabled(issue.getEnabled());
        issueToUpdate.setEstimated(issue.getEstimated());
        issueToUpdate.setLabel(issue.getLabel());
        issueToUpdate.setPhase(issue.getPhase());
        issueToUpdate.setPlannedEnd(issue.getPlannedEnd());
        issueToUpdate.setPlannedStart(issue.getPlannedStart());
        issueToUpdate.setPriority(issue.getPriority());
        issueToUpdate.setRemaining(issue.getRemaining());
        issueToUpdate.setReporter(issue.getReporter());
        issueToUpdate.setResolved("FINALIZADO".equalsIgnoreCase(issue.getState()) ? new Date() : issue.getResolved());
        issueToUpdate.setSprint(issue.getSprint());
        issueToUpdate.setState(issue.getState());
        issueToUpdate.setTitle(issue.getTitle());
        issueToUpdate.setUpdated(new Date());
        issueToUpdate.setVersion(issue.getVersion());
        issueToUpdate.setWatcher(issue.getWatcher());
        issueToUpdate.setDescription(issue.getDescription());

        return this.issueRepository.save(issueToUpdate);

    }

    public Issue setIssueInActiveSprint(Issue issue){
        Optional<Sprint> activeSprintOptional = sprintRepository.findByIsActiveIsTrueByProject(issue.getIdProject());

        if (!activeSprintOptional.isPresent())
            throw new ActiveSprintNotFoundException("No existe ningún sprint activo");

        Sprint activeSprint = activeSprintOptional.get();
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

    public List<Issue> getAllIssueOpenInActiveSprint(int idProject){
        return findAllIssueIsNotFinishByActiveSprint(idProject);
    }

    private List<Issue> findAllIssueIsNotFinishByActiveSprint(int idProject){
        Optional<Sprint> activeSprintOptional = sprintRepository.findByIsActiveIsTrueByProject(idProject);

        if (!activeSprintOptional.isPresent())
            throw new ActiveSprintNotFoundException("No existe ningún sprint activo");

        return issueRepository.findAllIssuesNotFinishBySprintIdByProject(activeSprintOptional.get().getId(), idProject);
    }
}