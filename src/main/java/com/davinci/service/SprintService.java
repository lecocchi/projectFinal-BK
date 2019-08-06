package com.davinci.service;

import com.davinci.dto.SprintDTO;
import com.davinci.dto.SprintReport;
import com.davinci.dto.Velocity;
import com.davinci.exceptions.ActiveSprintNotFoundException;
import com.davinci.exceptions.ErrorException;
import com.davinci.mapper.SprintMapper;
import com.davinci.model.Issue;
import com.davinci.model.Location;
import com.davinci.model.Project;
import com.davinci.model.Sprint;
import com.davinci.repository.IssueRepository;
import com.davinci.repository.LocationRepository;
import com.davinci.repository.ProjectRepository;
import com.davinci.repository.SprintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class SprintService {

    private SprintRepository sprintRepository;
    private IssueRepository issueRepository;
    private LocationRepository locationRepository;
    private List<Velocity> velocityChart;
    private List<SprintReport> sprintReports;
    private List<Issue> issues;
    private ProjectRepository projectRepository;

    @Autowired
    public SprintService(SprintRepository sprintRepository,
                         IssueRepository issueRepository,
                         LocationRepository locationRepository,
                         ProjectRepository projectRepository) {
        this.sprintRepository = sprintRepository;
        this.issueRepository = issueRepository;
        this.locationRepository = locationRepository;
        this.projectRepository = projectRepository;
    }

    public Sprint getSprintById(Integer id) {
        return this.sprintRepository.findOne(id);
    }

    public List<Sprint> getAllSprint(int idProject) {
        return this.sprintRepository.findAllSprintByProject(idProject);
    }

    public Sprint createSprint(Sprint sprint) {

        if (sprint.getName() != null){

            Sprint sprint1 = sprintRepository.findByNameByProject(sprint.getName(), sprint.getIdProject());

            sprint1.setDateFrom(sprint.getDateFrom());
            sprint1.setDateTo(sprint.getDateTo());
            return sprintRepository.save(sprint1);
        }else{
            sprint.setEnabled(true);
            Sprint newSprint = sprintRepository.save(sprint);

            Project project = this.projectRepository.findOne(sprint.getIdProject());
            project.setCurrentSprint(project.getCurrentSprint() + 1);

            newSprint.setName("Sprint " + project.getCurrentSprint());
            return sprintRepository.save(newSprint);
        }
    }

    public void deleteSprint(int idSprint, int idProject) {

        issueRepository.findAllBySprintByProject(idSprint, idProject)
                .forEach(i->{
                    i.setBacklog(true);
                    i.setSprint(null);
                    issueRepository.save(i);
                });

        Optional.ofNullable(this.sprintRepository.findOne(idSprint))
                .ifPresent(s -> this.sprintRepository.delete(s));
    }

    public Sprint updateSprint(Sprint sprint, Integer id) {
        return Optional.ofNullable(this.sprintRepository.findOne(id))
                .map(s -> {
                    s.setName(sprint.getName());
                    s.setDateFrom(sprint.getDateFrom());
                    s.setDateTo(sprint.getDateTo());
                    s.setEnabled(sprint.getEnabled());
                    return this.sprintRepository.save(s);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Sprint"));
    }

    public Sprint validateDateWhenCreateSprint(Date date, int idProject){
        return sprintRepository.findSprintByDate(date, idProject);
    }

    public Sprint finishSprint(Sprint sprint){

        sprint.setIsActive(false);
        Sprint sprintFinish = sprintRepository.save(sprint);
        issueRepository.findAllIssuesAndStatusCREATEDBySprintByProject(sprintFinish.getId(), sprint.getIdProject()).stream().forEach((issue -> {
            issue.setBacklog(true);
            issue.setSprint(null);
            issueRepository.save(issue);
        }));

        return sprintFinish;
    }

    public Location saveLocation(Location location){
        return locationRepository.save(location);
    }

    public List<Velocity> getVelocityChart(int idProject){

        velocityChart = new ArrayList<>();

        sprintRepository.findAllSprintByProject(idProject).stream()
                .forEach(sprint -> {
                    velocityChart.add(new Velocity(sprint.getName(), sprintRepository.getStoryPointBySprint(sprint.getId()), sprint.getId()));
                });
        return velocityChart;
    }

    public List<SprintReport> getSprintReport(int idProject){

        sprintReports = new ArrayList<>();

        sprintRepository.findAllSprintByProject(idProject).stream()
                .forEach(sprint -> {
                    issues = new ArrayList<>();
                    issueRepository.getIssueBySprintId(sprint.getId()).stream().forEach(issue -> issues.add(issue));

                    sprintReports.add(new SprintReport(sprint.getName(), issues));
                });
        return sprintReports;
    }

    public Sprint getActiveSprint(int id){
        if (!sprintRepository.findByIsActiveIsTrueByProject(id).isPresent())
            throw new ActiveSprintNotFoundException("No existe ningún sprint activo");

        return sprintRepository.findByIsActiveIsTrueByProject(id).get();
    }

    public Sprint activedSprint(Sprint sprint) {

        Optional<Sprint> sprintToActivatedOptional = sprintRepository.findByIsActiveIsTrueByProject(sprint.getIdProject());

        if (sprintToActivatedOptional.isPresent())
            throw new ActiveSprintNotFoundException("No es posible activar el sprint porque solamente puede existir un solo sprint activo");


        Sprint sprintToActivated = sprintRepository.findOne(sprint.getId());

        sprintToActivated.setIsActive(true);
        sprintToActivated.setIsCreate(false);
        return sprintRepository.save(sprintToActivated);

    }

    public List<Sprint> getAllSprintActiveOrCreateByProject(int idProject) {
        return sprintRepository.findAllSprintByIsActiveIsTrueOrIsCreateIsTrueByIdProject(idProject);
    }

    public Sprint getSprintByNameAndProject(String name, int idProject) {
        return sprintRepository.findAllSprintByProject(idProject).stream()
                .filter(s->
                   s.getName().equalsIgnoreCase(name)
                ).findAny().orElse(new Sprint());
    }
}
