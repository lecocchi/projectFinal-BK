package com.davinci.controller;


import com.davinci.model.Issue;
import com.davinci.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/issue/")
public class IssueController {

    private IssueService issueService;

    @Autowired
    public IssueController(IssueService IssueService) {
        this.issueService = IssueService;
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Issue> getById(@PathVariable("id") Integer id) {
        return Optional.ofNullable(this.issueService.getIssueById(id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping(value = "sprint/{sprint}")
    public ResponseEntity<List<Issue>> getAllBySprint(@PathVariable("sprint") Integer sprint) {
        return Optional.ofNullable(this.issueService.getAllIssueBySprint(sprint))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping(value = "backlog")
    public ResponseEntity<List<Issue>> getAllByBacklogIsTrue() {
        return Optional.ofNullable(this.issueService.getAllIssueByBacklogIsTrue())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping(value = "enabled")
    public ResponseEntity<List<Issue>> getAllByEnabledIsTrue() {
        return Optional.ofNullable(this.issueService.getAllIssueByEnabledIsTrue())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @GetMapping
    public ResponseEntity<List<Issue>> getAll() {
        return Optional.ofNullable(this.issueService.getAllIssue())
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping
    public ResponseEntity<Issue> create(@RequestBody Issue Issue) {
        return Optional.ofNullable(this.issueService.createIssue(Issue))
                .map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Issue> update(@PathVariable("id") Integer id, @RequestBody Issue Issue) {
        return Optional.ofNullable(this.issueService.updateIssue(Issue, id))
                .map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_MODIFIED));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.issueService.deleteIssue(id));
    }

    @GetMapping(value = "active-sprint")
    public ResponseEntity<List<Issue>> getAllIssueActiveSprint(){
        return Optional.ofNullable(this.issueService.getAllIssueActiveSprint())
                .map( a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @PostMapping(value = "sprint/{issueId}")
    public ResponseEntity<Issue> setIssueInActiveSprint(@PathVariable("issueId") Integer issueId){
        return ResponseEntity.ok(issueService.setIssueInActiveSprint(issueId));
    }

    @GetMapping(value = "/issues/{sprintId}")
    public ResponseEntity<List<Issue>> getIssuesBySprintId(@PathVariable("sprintId") Integer sprintId){
        return ResponseEntity.ok(issueService.getIssuesBySprintId(sprintId));
    }

    @PatchMapping(value = "sprint/issues/backlog/")
    public ResponseEntity<Issue> addIssuesInBacklog(@RequestBody Issue issue){
        return ResponseEntity.ok(issueService.addIssueInBacklog(issue));
    }

    @GetMapping(value = "open/")
    public ResponseEntity<?> getIssuesOpenBySprintId(){
        return ResponseEntity.ok(issueService.getAllIssueOpenInActiveSprint());
    }
}
