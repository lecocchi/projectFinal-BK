package com.davinci.dto;


import com.fasterxml.jackson.annotation.JsonProperty;

public class Velocity {

    @JsonProperty("sprint")
    private String sprint;

    @JsonProperty("story")
    private Integer storyPoint;

    @JsonProperty("id_sprint")
    private int idSprint;

    public Velocity(String sprint, Integer storyPoint, int idSprint) {
        this.sprint = sprint;
        this.storyPoint = storyPoint;
        this.idSprint = idSprint;
    }
}
