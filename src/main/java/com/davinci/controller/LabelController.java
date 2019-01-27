package com.davinci.controller;


import com.davinci.model.Label;
import com.davinci.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(value = "http://ec2-3-86-96-157.compute-1.amazonaws.com:8090")
@RequestMapping("/label/")
public class LabelController {

    private LabelService labelService;

    @Autowired
    public LabelController(LabelService labelService) {
        this.labelService = labelService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Label> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.labelService.getLabelById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<Label>> getAll() {
        return Optional.ofNullable(this.labelService.getAllLabel())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<Label> create(@RequestBody Label label) {
        return Optional.ofNullable(this.labelService.createLabel(label))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Label> update(@PathVariable("id") Integer id, @RequestBody Label label) {
        return Optional.ofNullable(this.labelService.updateLabel(label, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.labelService.deleteLabel(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
