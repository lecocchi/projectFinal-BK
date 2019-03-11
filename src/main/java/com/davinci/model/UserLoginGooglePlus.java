package com.davinci.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserLoginGooglePlus {
    @JsonProperty(value = "email")
    private String email;

    @JsonCreator
    public UserLoginGooglePlus(@JsonProperty(value = "email") final String email){
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}
