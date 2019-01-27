package com.davinci.controller;


import com.davinci.model.Rol;
import com.davinci.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(value = "http://ec2-3-86-96-157.compute-1.amazonaws.com:8090")
@RequestMapping("/rol/")
public class RolController {

    private RolService rolService;

    @Autowired
    public RolController(RolService rolService) {
        this.rolService = rolService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Rol> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.rolService.getRolById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<Rol>> getAll() {
        return Optional.ofNullable(this.rolService.getAllRol())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<Rol> create(@RequestBody Rol rol) {
        return Optional.ofNullable(this.rolService.createRol(rol))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Rol> update(@PathVariable("id") Integer id, @RequestBody Rol rol) {
        return Optional.ofNullable(this.rolService.updateRol(rol, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.rolService.deleteRol(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
