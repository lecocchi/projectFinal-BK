package com.davinci.controller;


import com.davinci.model.Priority;
import com.davinci.service.PriorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(value = "http://ec2-3-86-96-157.compute-1.amazonaws.com:8090")
@RequestMapping("/priority/")
public class PriorityController {

    private PriorityService priorityService;

    @Autowired
    public PriorityController(PriorityService priorityService) {
        this.priorityService = priorityService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Priority> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.priorityService.getPriorityById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<Priority>> getAll() {
        return Optional.ofNullable(this.priorityService.getAllPriority())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<Priority> create(@RequestBody Priority priority) {
        return Optional.ofNullable(this.priorityService.createPriority(priority))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Priority> update(@PathVariable("id") Integer id, @RequestBody Priority priority) {
        return Optional.ofNullable(this.priorityService.updatePriority(priority, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.priorityService.deletePriority(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
