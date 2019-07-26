package com.davinci.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class IdsProject {
    @JsonProperty("ids")
    private List<Integer> ids;

    public List<Integer> getIds() {
        return ids;
    }

    public void setIds(List<Integer> ids) {
        this.ids = ids;
    }
}
