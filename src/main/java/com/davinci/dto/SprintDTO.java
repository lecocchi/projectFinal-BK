package com.davinci.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;


@JsonIgnoreProperties(ignoreUnknown = true)
public class SprintDTO {

    private String name;

    private String description;

    @NotNull
    @JsonProperty(value = "date_from")
    private Long dateFrom;

    @NotNull
    @JsonProperty(value = "date_to")
    private Long dateTo;

    @NotNull
    @JsonProperty(value = "id_project")
    private int idProject;

    @JsonProperty("is_active")
    private boolean isActive;

    @JsonProperty("is_create")
    private boolean isCreate;

    public SprintDTO() {
    }

    public SprintDTO(String name, String description, Long dateFrom, Long dateTo, int idProject, boolean isActive, boolean isCreate) {
        this.name = name;
        this.description = description;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.idProject = idProject;
        this.isActive = isActive;
        this.isCreate = isCreate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Long dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Long getDateTo() {
        return dateTo;
    }

    public void setDateTo(Long dateTo) {
        this.dateTo = dateTo;
    }

    public int getIdProject() {
        return idProject;
    }

    public void setIdProject(int idProject) {
        this.idProject = idProject;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public boolean isCreate() {
        return isCreate;
    }

    public void setCreate(boolean create) {
        isCreate = create;
    }
}