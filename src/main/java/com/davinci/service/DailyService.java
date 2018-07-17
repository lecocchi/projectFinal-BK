package com.davinci.service;

import com.davinci.dto.DailyDTO;
import com.davinci.model.Daily;
import com.davinci.repository.DailyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DailyService {

    @Autowired
    private DailyRepository repository;


    @Transactional
    public void createDaily(List<DailyDTO> dailies) {

        for (DailyDTO daily : dailies) {
            repository.save(new Daily(daily.getIdUser(), daily.getRol(), daily.getYesterday(), daily.getToday()));
        }

    }
}
