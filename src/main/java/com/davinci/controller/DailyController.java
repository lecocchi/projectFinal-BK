package com.davinci.controller;

import com.davinci.dto.DailyDTO;
import com.davinci.model.Daily;
import com.davinci.service.DailyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/daily/")
public class DailyController {

    @Autowired
    private DailyService dailyService;


    @PostMapping
    public ResponseEntity<Void> create(@RequestBody List<DailyDTO> dailies){

        dailyService.createDaily(dailies);

        return new ResponseEntity<>(HttpStatus.CREATED);

//        return Optional.of(dailyService.createDaily(dailies))
//                .map( d -> new ResponseEntity<>( HttpStatus.CREATED))
//                .orElse( new ResponseEntity<>(HttpStatus.CONFLICT));
    }



}
