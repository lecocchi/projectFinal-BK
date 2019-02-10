package com.davinci.service;

import com.davinci.dto.SprintDTO;
import com.davinci.exceptions.ErrorException;
import com.davinci.model.Sprint;
import com.davinci.repository.SprintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class SprintService {

    private SprintRepository sprintRepository;

    @Autowired
    public SprintService(SprintRepository sprintRepository) {
        this.sprintRepository = sprintRepository;
    }

    public Sprint getSprintById(Integer id) {
        return this.sprintRepository.findOne(id);
    }

    public List<Sprint> getAllSprint() {
        return this.sprintRepository.findAll();
    }

    public Sprint createSprint(Sprint sprint) {


        Sprint activeSprint = sprintRepository.findByIsActiveIsTrue();

        if (activeSprint == null){ // No existe un sprint activo, podemos crear uno
            sprint.setEnabled(true);
            sprint.setIsActive(true);
            Sprint newSprint = sprintRepository.save(sprint);
            newSprint.setName("Sprint " + newSprint.getId());
            return sprintRepository.save(newSprint);
        }else{
            throw new ErrorException("No se puede crear un sprint porque ya existe un sprint activo. Por favor finalice el sprint activo.");
        }

    }

    public void deleteSprint(Integer id) {
        Optional.ofNullable(this.sprintRepository.findOne(id))
                .ifPresent(s -> this.sprintRepository.delete(s));
    }

    public Sprint updateSprint(Sprint sprint, Integer id) {
        return Optional.ofNullable(this.sprintRepository.findOne(id))
                .map(s -> {
                    s.setName(sprint.getName());
                    s.setDateFrom(sprint.getDateFrom());
                    s.setDateTo(sprint.getDateTo());
                    s.setEnabled(sprint.getEnabled());
                    return this.sprintRepository.save(s);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Sprint"));
    }

    public Sprint validateDateWhenCreateSprint(Date date){
        return sprintRepository.findSprintByDate(date);
    }

    public Sprint finishSprint(Sprint sprint){
        return Optional.ofNullable(this.sprintRepository.findOne(Integer.valueOf(sprint.getId())))
                .map(s -> {
                    s.setIsActive(false);
                    return this.sprintRepository.save(s);
                })
                .orElseThrow(() -> new ErrorException("No existe el Sprint para finalizar"));
    }

}
