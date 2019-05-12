package com.davinci.dto;

import com.davinci.model.Issue;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class SprintReport {

    @JsonProperty("sprint")
    private String sprint;

    @JsonProperty("issues")
    private List<Issue> issues;

    public SprintReport(String sprint, List<Issue> issues) {
        this.sprint = sprint;
        this.issues = issues;
    }
}
