package com.davinci.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "current_sprint")
    private int currentSprint;

    public Project(){}

    public Project(String name, String description, int currentSprint) {
        this.name = name;
        this.description = description;
        this.currentSprint = currentSprint;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getCurrentSprint() {
        return currentSprint;
    }

    public void setCurrentSprint(int currentSprint) {
        this.currentSprint = currentSprint;
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
}
