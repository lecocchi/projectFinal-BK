package com.davinci.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ChangePassword {

    @JsonProperty("email")
    private String email;

    @JsonProperty("password")
    private String password;

    @JsonCreator
    public ChangePassword(@JsonProperty("email") final String email, @JsonProperty("password") final String password){
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
