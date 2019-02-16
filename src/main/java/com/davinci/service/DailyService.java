package com.davinci.service;

import com.davinci.dto.DailyDTO;
import com.davinci.mapper.DailyMapper;
import com.davinci.model.Daily;
import com.davinci.repository.DailyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class DailyService {

    @Autowired
    private DailyRepository repository;


    @Transactional
    public Daily createDaily(Daily daily) {

        Daily dailyNow = repository.findByCreatedAt(LocalDate.now());

        if (dailyNow != null)
            repository.delete(dailyNow);

        return repository.save(daily);
    }

    public List<DailyDTO> getAllDaily() {

        return repository.findAll().stream()
                .map( item ->DailyMapper.from(item))
                .collect(Collectors.toList());


    }

    public Boolean isThereDailyToday() {
        Daily dailyNow = repository.findByCreatedAt(LocalDate.now());
        return (dailyNow != null);
    }
}
