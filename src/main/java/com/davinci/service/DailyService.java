package com.davinci.service;

import com.davinci.model.Daily;
import com.davinci.repository.DailyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class DailyService {

    @Autowired
    private DailyRepository repository;


    public Daily createDaily(Daily daily){

        daily.setCreatedAt(new Date());

        return repository.save(daily);
    }
}
