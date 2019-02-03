package com.davinci.controller;


import com.davinci.model.Phase;
import com.davinci.service.PhaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/phase/")
public class PhaseController {

    private PhaseService phaseService;

    @Autowired
    public PhaseController(PhaseService phaseService) {
        this.phaseService = phaseService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Phase> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.phaseService.getPhaseById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<Phase>> getAll() {
        return Optional.ofNullable(this.phaseService.getAllPhase())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<Phase> create(@RequestBody Phase phase) {
        return Optional.ofNullable(this.phaseService.createPhase(phase))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Phase> update(@PathVariable("id") Integer id, @RequestBody Phase phase) {
        return Optional.ofNullable(this.phaseService.updatePhase(phase, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.phaseService.deletePhase(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
