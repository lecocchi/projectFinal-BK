package com.davinci.controller;

import com.davinci.dto.DailyDTO;
import com.davinci.mapper.DailyMapper;
import com.davinci.model.Daily;
import com.davinci.model.Mail;
import com.davinci.service.DailyService;
import com.davinci.service.EmailService;
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

    @Autowired
    private EmailService emailService;


    @PostMapping
    public ResponseEntity<Daily> create(@RequestBody DailyDTO dailyDTO){

        dailyDTO.setAvatar("http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg");

        return new ResponseEntity<Daily>(dailyService.createDaily(DailyMapper.to(dailyDTO)),HttpStatus.CREATED);
    }

    @GetMapping("projects/{id}")
    public ResponseEntity<List<DailyDTO>> getAllDaily(@PathVariable("id") int idProject){
        return ResponseEntity.ok(dailyService.getAllDaily(idProject));
    }

    @GetMapping("today/projects/{idProject}")
    public ResponseEntity<Boolean> isThereDailyToday(@PathVariable("idProject") int idProject){
        return ResponseEntity.ok(dailyService.isThereDailyToday(idProject));
    }

    @PostMapping("{id}/mail/")
    public ResponseEntity<?> sendMail(@PathVariable("id") String id){
        emailService.sendSimpleMessage(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
