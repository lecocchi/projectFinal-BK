package com.davinci.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SprintDTO {

    @NotEmpty
    private String name;

    private String description;

    @NotNull
    @JsonProperty(value = "date_from")
    private Long dateFrom;

    @NotNull
    @JsonProperty(value = "date_to")
    private Long dateTo;

}
