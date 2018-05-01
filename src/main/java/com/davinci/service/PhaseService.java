package com.davinci.service;

import com.davinci.model.Phase;
import com.davinci.repository.PhaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PhaseService {

    private PhaseRepository phaseRepository;

    @Autowired
    public PhaseService(PhaseRepository phaseRepository) {
        this.phaseRepository = phaseRepository;
    }

    public Phase getPhaseById(Integer id) {
        return this.phaseRepository.findOne(id);
    }

    public List<Phase> getAllPhase() {
        return this.phaseRepository.findAll();
    }

    public Phase createPhase(Phase phase) {
        phase.setCreated(new Date());
        return this.phaseRepository.save(phase);
    }

    public void deletePhase(Integer id) {
        Optional.ofNullable(this.phaseRepository.findOne(id))
                .ifPresent(p -> this.phaseRepository.delete(p));
    }

    public Phase updatePhase(Phase phase, Integer id) {
        return Optional.ofNullable(this.phaseRepository.findOne(id))
                .map(p -> {
                    p.setName(phase.getName());
                    return this.phaseRepository.save(p);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Phase"));
    }
}
