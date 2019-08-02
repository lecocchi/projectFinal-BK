package com.davinci.controller;

import com.davinci.dto.ProjectUsers;
import com.davinci.model.Project;
import com.davinci.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/projects")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping
    public ResponseEntity<Project> create(@RequestBody Project project){
        return ResponseEntity.ok(projectService.create(project));
    }

    @GetMapping
    public ResponseEntity<List<Project>> getAllProject(){
        return ResponseEntity.ok(projectService.getAllProject());
    }

    @PatchMapping
    public ResponseEntity<Project> update(@RequestBody Project project){
        return ResponseEntity.ok(projectService.update(project));
    }

    @PatchMapping("/users")
    public ResponseEntity<?> updateUsersInProject(@RequestBody ProjectUsers projectUsers){
        projectService.addUsersInProject(projectUsers);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable("id") String id){
        projectService.deleteProject(Integer.valueOf(id));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
