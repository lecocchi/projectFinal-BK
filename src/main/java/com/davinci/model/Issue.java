package com.davinci.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Issue implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty
    @Column(name = "TITLE")
    private String title;

    @Column(name = "AVATAR")
    private String avatar;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "PRIORITY")
    private String priority;

    @Column(name = "LABEL")
    private String label;

    @Column(name = "PHASE")
    private String phase;

    @Column(name = "STATE")
    private String state;

    @Column(name = "VERSION")
    private String version;

    @Column(name = "ASSIGNEE")
    private String assignee;

    @Column(name = "REPORTER")
    private String reporter;

    @Column(name = "ID_WATCHER")
    private Integer watcher;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "CREATED")
    private Date created;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "UPDATED")
    private Date updated;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "RESOLVED")
    private Date resolved;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "PLANNED_START")
    private Date plannedStart;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "PLANNED_END")
    private Date plannedEnd;

    @Column(name = "ESTIMATED")
    private Integer estimated;

    @Column(name = "REMAINING")
    private Integer remaining;

    @Column(name = "ID_SPRINT")
    private Integer sprint;

    @NotNull
    @Column(name = "BACKLOG")
    private Boolean backlog;

    @NotNull
    @Column(name = "ENABLED")
    private Boolean enabled;

    @NotNull
    @Column(name = "id_project")
    private int idProject;

    public Issue(String label, String description, String avatar, String phase, String priority, Integer sprint, String state, String reporter, String assignee, String version, String title, Integer watcher, Date created, Date updated, Date resolved, Date plannedStart, Date plannedEnd, Integer estimated, Integer remaining, Boolean backlog, Boolean enabled, int idProject) {
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
    }

}
