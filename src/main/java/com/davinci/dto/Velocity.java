package com.davinci.dto;


import com.fasterxml.jackson.annotation.JsonProperty;

public class Velocity {

    @JsonProperty("sprint")
    private String sprint;

    @JsonProperty("story")
    private Integer storyPoint;

    public Velocity(String sprint, Integer storyPoint) {
        this.sprint = sprint;
        this.storyPoint = storyPoint;
    }
}
