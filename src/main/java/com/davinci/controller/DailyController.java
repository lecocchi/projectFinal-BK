package com.davinci.controller;

import com.davinci.model.Daily;
import com.davinci.service.DailyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/daily/")
public class DailyController {

    @Autowired
    private DailyService dailyService;


    @PostMapping
    public ResponseEntity<Daily> create(@RequestBody Daily daily){
        return Optional.of(dailyService.createDaily(daily))
                .map( d -> new ResponseEntity<>( d, HttpStatus.CREATED))
                .orElse( new ResponseEntity<>(HttpStatus.CONFLICT));
    }

}
