package com.davinci.service;

import com.davinci.model.Priority;
import com.davinci.repository.PriorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PriorityService {

    private PriorityRepository priorityRepository;

    @Autowired
    public PriorityService(PriorityRepository priorityRepository) {
        this.priorityRepository = priorityRepository;
    }

    public Priority getPriorityById(Integer id) {
        return this.priorityRepository.findOne(id);
    }

    public List<Priority> getAllPriority() {
        return this.priorityRepository.findAll();
    }

    public Priority createPriority(Priority priority) {
        priority.setCreated(new Date());
        return this.priorityRepository.save(priority);
    }

    public void deletePriority(Integer id) {
        Optional.ofNullable(this.priorityRepository.findOne(id))
                .ifPresent(p -> this.priorityRepository.delete(p));
    }

    public Priority updatePriority(Priority priority, Integer id) {
        return Optional.ofNullable(this.priorityRepository.findOne(id))
                .map(p -> {
                    p.setName(priority.getName());
                    return this.priorityRepository.save(p);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Priority"));
    }
}
