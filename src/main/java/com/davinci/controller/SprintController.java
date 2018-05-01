package com.davinci.controller;


import com.davinci.model.Sprint;
import com.davinci.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public ResponseEntity<List<Sprint>> getAll() {
        return Optional.ofNullable(this.sprintService.getAllSprint())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<Sprint> create(@RequestBody Sprint sprint) {
        return Optional.ofNullable(this.sprintService.createSprint(sprint))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Sprint> update(@PathVariable("id") Integer id, @RequestBody Sprint sprint) {
        return Optional.ofNullable(this.sprintService.updateSprint(sprint, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.sprintService.deleteSprint(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
