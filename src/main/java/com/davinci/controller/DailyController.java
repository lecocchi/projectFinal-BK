package com.davinci.controller;

import com.davinci.dto.DailyDTO;
import com.davinci.mapper.DailyMapper;
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
    public ResponseEntity<Void> create(@RequestBody DailyDTO daily){

        dailyService.createDaily(DailyMapper.from(daily));

        return new ResponseEntity<>(HttpStatus.CREATED);

    }



}
