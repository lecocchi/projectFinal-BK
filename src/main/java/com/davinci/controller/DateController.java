package com.davinci.controller;

import com.davinci.Utils.UtilsDate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/date")
@CrossOrigin(value = "http://ec2-3-86-96-157.compute-1.amazonaws.com:8090")
public class DateController {

    @GetMapping("/now")
    public ResponseEntity<LocalDateTime> now(){
        return ResponseEntity.ok(UtilsDate.now());
    }

}
