package com.davinci.controller;


import com.davinci.model.State;
import com.davinci.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/state/")
public class StateController {

    private StateService stateService;

    @Autowired
    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<State> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.stateService.getStateById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<State>> getAll() {
        return Optional.ofNullable(this.stateService.getAllState())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<State> create(@RequestBody State state) {
        return Optional.ofNullable(this.stateService.createState(state))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<State> update(@PathVariable("id") Integer id, @RequestBody State state) {
        return Optional.ofNullable(this.stateService.updateState(state, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.stateService.deleteState(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
