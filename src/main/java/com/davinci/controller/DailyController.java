package com.davinci.controller;

import com.davinci.dto.DailyDTO;
import com.davinci.mapper.DailyMapper;
import com.davinci.service.DailyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/daily/")
public class DailyController {

    @Autowired
    private DailyService dailyService;


    @PostMapping
    public ResponseEntity<Void> create(@RequestBody DailyDTO dailyDTO){

        dailyDTO.setAvatar("http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg");
        dailyService.createDaily(DailyMapper.to(dailyDTO));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<DailyDTO>> getAllDaily(){
        return ResponseEntity.ok(dailyService.getAllDaily());
    }

    @GetMapping("/today")
    public ResponseEntity<Boolean> isThereDailyToday(){
        return ResponseEntity.ok(dailyService.isThereDailyToday());
    }

}
