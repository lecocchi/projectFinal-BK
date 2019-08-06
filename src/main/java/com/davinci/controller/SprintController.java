package com.davinci.controller;


import com.davinci.dto.SprintDTO;
import com.davinci.exceptions.ErrorException;
import com.davinci.mapper.SprintMapper;
import com.davinci.model.Location;
import com.davinci.model.Sprint;
import com.davinci.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/sprint/")
public class SprintController {

    private SprintService sprintService;

    @Autowired
    public SprintController(SprintService sprintService) {
        this.sprintService = sprintService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Sprint> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.sprintService.getSprintById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping("projects/{id}")
    public ResponseEntity<List<Sprint>> getAll(@PathVariable("id") int id) {
        return Optional.ofNullable(this.sprintService.getAllSprint(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody SprintDTO sprintDTO) {

        Sprint dateFrom = sprintService.validateDateWhenCreateSprint(new Date(sprintDTO.getDateFrom()), sprintDTO.getIdProject());
        Sprint dateTo = sprintService.validateDateWhenCreateSprint(new Date(sprintDTO.getDateTo()), sprintDTO.getIdProject());

        if ((dateFrom != null && !dateFrom.getName().equalsIgnoreCase(sprintDTO.getName())) || (dateTo != null && !dateTo.getName().equalsIgnoreCase(sprintDTO.getName())))
            throw new ErrorException("Error al intentar crear el Sprint.La fecha 'Desde' y/o 'Hasta' se encuentran dentro del rango de otro Sprint");

        return new ResponseEntity<>(this.sprintService.createSprint(SprintMapper.to(sprintDTO)), HttpStatus.CREATED);

    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Sprint> update(@PathVariable("id") Integer id, @RequestBody Sprint sprint) {
        return Optional.ofNullable(this.sprintService.updateSprint(sprint, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping("/{id}/projects/{idProject}")
    public ResponseEntity<Void> delete(@PathVariable("id") int idSprint, @PathVariable("idProject") int idProject) {
        this.sprintService.deleteSprint(idSprint, idProject);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "finish")
    public ResponseEntity<?> finish(@RequestBody Sprint sprint){
        return ResponseEntity.ok(sprintService.finishSprint(sprint));
    }

    @PostMapping(value = "location")
    public ResponseEntity<?> location(@RequestBody Location location){
        return ResponseEntity.ok(sprintService.saveLocation(location));
    }

    @GetMapping("velocity/projects/{idProject}")
    public ResponseEntity<?> getVelocityChart(@PathVariable("idProject") int idProject){
        return ResponseEntity.ok(sprintService.getVelocityChart(idProject));
    }

    @GetMapping("sprint-report/projects/{idProject}")
    public ResponseEntity<?> getSprintReport(@PathVariable("idProject") int idProject){
        return ResponseEntity.ok(sprintService.getSprintReport(idProject));
    }

    @GetMapping("active/projects/{id}")
    public ResponseEntity<?> getActiveSprint(@PathVariable("id") int id){
        return ResponseEntity.ok(sprintService.getActiveSprint(id));
    }

    @PostMapping("active")
    public ResponseEntity<?> activedSprint(@RequestBody Sprint sprint){
        return ResponseEntity.ok(sprintService.activedSprint(sprint));
    }

    @GetMapping("availables/projects/{id}")
    public ResponseEntity<?> getAllSprintAvailables(@PathVariable("id") int idProject){
        return ResponseEntity.ok(sprintService.getAllSprintActiveOrCreateByProject(idProject));
    }

    @GetMapping("{name}/projects/{id}")
    public ResponseEntity<?> getSprintByNameAndProject(@PathVariable("name") String name, @PathVariable("id") int idProject){
        return ResponseEntity.ok(sprintService.getSprintByNameAndProject(name, idProject));
    }

}
