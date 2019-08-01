package com.davinci.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class ProjectUsers {
    @JsonProperty(value = "users_id")
    private List<Integer> users;

    @JsonProperty(value = "project_id")
    private int project_id;

    public List<Integer> getUsers() {
        return users;
    }

    public void setUsers(List<Integer> users) {
        this.users = users;
    }

    public int getProject_id() {
        return project_id;
    }

    public void setProject_id(int project_id) {
        this.project_id = project_id;
    }
}
