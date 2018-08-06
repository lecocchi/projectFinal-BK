package com.davinci.mapper;

import com.davinci.dto.SprintDTO;
import com.davinci.model.Sprint;

import java.util.Date;

public class SprintMapper {

    public static Sprint to (SprintDTO sprintDTO){
        Sprint sprint = new Sprint();

        sprint.setName(sprintDTO.getName());
        sprint.setDateFrom(new Date(sprintDTO.getDateFrom()));
        sprint.setDateTo(new Date(sprintDTO.getDateTo()));
        sprint.setCreated(new Date(sprintDTO.getCreated()));
        sprint.setEnabled(sprintDTO.getEnabled());

        return sprint;
    }
}
