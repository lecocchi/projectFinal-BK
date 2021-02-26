package com.davinci.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;


public class IssueDTO {
    private Integer id;
    private String title;
    private String avatar;
    private String description;
    private String priority;
    private String label;
    private String phase;
    private String state;
    private String version;
    private String assignee;
    private String reporter;
    private Integer watcher;
    private Date created;
    private Date updated;
    private Date resolved;
    private Date plannedStart;
    private Date plannedEnd;
    private Integer estimated;
    private Integer remaining;
    private Integer sprint;
    private Boolean backlog;
    private Boolean enabled;
    private int idProject;
    private String sprintName;

    public IssueDTO(Integer id, String label, String description, String avatar, String phase, String priority, Integer sprint, String state, String reporter, String assignee, String version, String title, Integer watcher, Date created, Date updated, Date resolved, Date plannedStart, Date plannedEnd, Integer estimated, Integer remaining, Boolean backlog, Boolean enabled, int idProject, String springName) {
        this.id = id;
        this.description = description;
        this.avatar = avatar;
        this.label = label;
        this.phase = phase;
        this.priority = priority;
        this.sprint = sprint;
        this.state = state;
        this.reporter = reporter;
        this.assignee = assignee;
        this.version = version;
        this.title = title;
        this.watcher = watcher;
        this.created = created;
        this.updated = updated;
        this.resolved = resolved;
        this.plannedStart = plannedStart;
        this.plannedEnd = plannedEnd;
        this.estimated = estimated;
        this.remaining = remaining;
        this.backlog = backlog;
        this.enabled = enabled;
        this.idProject = idProject;
        this.sprintName = springName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getPhase() {
        return phase;
    }

    public void setPhase(String phase) {
        this.phase = phase;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    public String getReporter() {
        return reporter;
    }

    public void setReporter(String reporter) {
        this.reporter = reporter;
    }

    public Integer getWatcher() {
        return watcher;
    }

    public void setWatcher(Integer watcher) {
        this.watcher = watcher;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Date getResolved() {
        return resolved;
    }

    public void setResolved(Date resolved) {
        this.resolved = resolved;
    }

    public Date getPlannedStart() {
        return plannedStart;
    }

    public void setPlannedStart(Date plannedStart) {
        this.plannedStart = plannedStart;
    }

    public Date getPlannedEnd() {
        return plannedEnd;
    }

    public void setPlannedEnd(Date plannedEnd) {
        this.plannedEnd = plannedEnd;
    }

    public Integer getEstimated() {
        return estimated;
    }

    public void setEstimated(Integer estimated) {
        this.estimated = estimated;
    }

    public Integer getRemaining() {
        return remaining;
    }

    public void setRemaining(Integer remaining) {
        this.remaining = remaining;
    }

    public Integer getSprint() {
        return sprint;
    }

    public void setSprint(Integer sprint) {
        this.sprint = sprint;
    }

    public Boolean getBacklog() {
        return backlog;
    }

    public void setBacklog(Boolean backlog) {
        this.backlog = backlog;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public int getIdProject() {
        return idProject;
    }

    public void setIdProject(int idProject) {
        this.idProject = idProject;
    }

    public String getSprintName() {
        return sprintName;
    }

    public void setSprintName(String sprintName) {
        this.sprintName = sprintName;
    }
}
