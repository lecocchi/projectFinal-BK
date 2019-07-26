package com.davinci.controller;

import com.davinci.dto.ChangePassword;
import com.davinci.dto.IdsProject;
import com.davinci.dto.UserProjects;
import com.davinci.model.User;
import com.davinci.model.UserLogin;
import com.davinci.model.UserLoginGooglePlus;
import com.davinci.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/user/")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<User> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.userService.getUserById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return Optional.ofNullable(this.userService.getAllUser())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user) {
        return Optional.ofNullable(this.userService.createUser(user))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<User> update(@PathVariable("id") Integer id, @RequestBody User user) {
        return Optional.ofNullable(this.userService.updateUser(user, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
        this.userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "login-mail")
    public ResponseEntity<?> loginUsername(@RequestBody UserLogin userLogin){
        return ResponseEntity.ok(userService.getUserByUserAndPass(userLogin.getUserName(),userLogin.getPassword()));
    }

    @PatchMapping("password")
    public ResponseEntity<?> changePassword(@RequestBody final ChangePassword changePassword){
        return ResponseEntity.ok(userService.changePassword(changePassword));
    }

    @PostMapping("google-plus")
    public ResponseEntity<?> loginGooglePlus(@RequestBody UserLoginGooglePlus userLoginGooglePlus){
        return ResponseEntity.ok(userService.loginGooglePlus(userLoginGooglePlus.getEmail()));
    }

    @PutMapping("add-projects")
    public ResponseEntity<?> addProject(@RequestBody UserProjects userProjects){
        userService.addProjecstByUser(userProjects);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("projects/{id}")
    public ResponseEntity<?> getProjectsByUserId(@PathVariable("id") int id){
        return ResponseEntity.ok(userService.getProjectsByUserId(id));
    }

    @GetMapping("projects")
    public ResponseEntity<?> getAllProjects(){
        return ResponseEntity.ok(userService.getAllProjects());
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<?> getUsersByProject(@PathVariable("projectId") int projectId){
        return ResponseEntity.ok(userService.getUsersByProject(projectId));
    }

    @PostMapping("/projects-by-ids")
    public ResponseEntity<?> getProjectsById(@RequestBody IdsProject ids){
        return ResponseEntity.ok(userService.getProjectsByListIds(ids));
    }

}
