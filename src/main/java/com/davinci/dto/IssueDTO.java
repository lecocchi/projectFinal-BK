package com.davinci.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
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
}
