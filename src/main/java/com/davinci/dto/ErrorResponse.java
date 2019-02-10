package com.davinci.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ErrorResponse {
    @JsonProperty("status")
    private String status;

    @JsonProperty("title")
    private String title;

    @JsonProperty("message")
    private String  message;

    @JsonCreator
    public ErrorResponse(@JsonProperty("status") final String status,
                         @JsonProperty("title") final String title,
                         @JsonProperty("message") final String message){
        this.status = status;
        this.title = title;
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public String getTitle() {
        return title;
    }

    public String getMessage() {
        return message;
    }
}
