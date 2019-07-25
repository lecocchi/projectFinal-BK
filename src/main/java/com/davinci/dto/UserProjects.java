package com.davinci.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class UserProjects {
    @JsonProperty(value = "projects_id")
    private List<Integer> projects;

    @JsonProperty(value = "user_id")
    private int user_id;

    public List<Integer> getProjects() {
        return projects;
    }

    public void setProjects(List<Integer> projects) {
        this.projects = projects;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
