package com.davinci.model;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "ISSUE")
public class Issue implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "ID_LABEL")
    private Integer label;

    @Column(name = "ID_PHASE")
    private Integer phase;

    @NotNull
    @Column(name = "ID_PRIORITY")
    private Integer priority;

    @Column(name = "ID_SPRINT")
    private Integer sprint;

    @NotNull
    @Column(name = "ID_STATE")
    private Integer state;

    @NotNull
    @Column(name = "ID_REPORTER")
    private Integer reporter;

    @Column(name = "ID_ASSIGNEE")
    private Integer assignee;

    @Column(name = "ID_VERSION")
    private Integer version;

    @NotEmpty
    @Column(name = "TITLE")
    private String title;

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

    @NotNull
    @Column(name = "BACKLOG")
    private Boolean backlog;

    @NotNull
    @Column(name = "ENABLED")
    private Boolean enabled;

    public Issue() {
    }

    public Issue(Integer label, Integer phase, Integer priority, Integer sprint, Integer state, Integer reporter, Integer assignee, Integer version, String title, Integer watcher, Date created, Date updated, Date resolved, Date plannedStart, Date plannedEnd, Integer estimated, Integer remaining, Boolean backlog, Boolean enabled) {
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
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getLabel() {
        return label;
    }

    public void setLabel(Integer label) {
        this.label = label;
    }

    public Integer getPhase() {
        return phase;
    }

    public void setPhase(Integer phase) {
        this.phase = phase;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public Integer getSprint() {
        return sprint;
    }

    public void setSprint(Integer sprint) {
        this.sprint = sprint;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getReporter() {
        return reporter;
    }

    public void setReporter(Integer reporter) {
        this.reporter = reporter;
    }

    public Integer getAssignee() {
        return assignee;
    }

    public void setAssignee(Integer assignee) {
        this.assignee = assignee;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
}
