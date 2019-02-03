package com.davinci.controller;

import com.davinci.model.Version;
import com.davinci.service.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/version/")
public class VersionController {

    private VersionService versionService;

    @Autowired
    public VersionController(VersionService versionService) {
        this.versionService = versionService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Version> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.versionService.getVersionById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<Version>> getAll() {
        return Optional.ofNullable(this.versionService.getAllVersion())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<Version> create(@RequestBody Version version) {
        return Optional.ofNullable(this.versionService.createVersion(version))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Version> update(@PathVariable("id") Integer id, @RequestBody Version version) {
        return Optional.ofNullable(this.versionService.updateVersion(version, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.versionService.deleteVersion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
