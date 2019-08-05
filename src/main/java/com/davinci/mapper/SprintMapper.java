package com.davinci.mapper;

import com.davinci.dto.SprintDTO;
import com.davinci.model.Sprint;

import java.util.Date;

public class SprintMapper {

    public static Sprint to (SprintDTO sprintDTO){
        Sprint sprint = new Sprint();

        sprint.setName(sprintDTO.getName());
        sprint.setDescription(sprintDTO.getDescription());
        sprint.setDateFrom(new Date(sprintDTO.getDateFrom()));
        sprint.setDateTo(new Date(sprintDTO.getDateTo()));
        sprint.setCreated(new Date());
        sprint.setEnabled(true);
        sprint.setIdProject(sprintDTO.getIdProject());
        sprint.setIsCreate(sprintDTO.isCreate());
        sprint.setIsActive(sprintDTO.isActive());

        return sprint;
    }
}
