package com.davinci.service;

import com.davinci.model.State;
import com.davinci.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class StateService {

    private StateRepository stateRepository;

    @Autowired
    public StateService(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    public State getStateById(Integer id) {
        return this.stateRepository.findOne(id);
    }

    public List<State> getAllState() {
        return this.stateRepository.findAll();
    }

    public State createState(State state) {
        state.setCreated(new Date());
        return this.stateRepository.save(state);
    }

    public void deleteState(Integer id) {
        Optional.ofNullable(this.stateRepository.findOne(id))
                .ifPresent(s -> this.stateRepository.delete(s));
    }

    public State updateState(State state, Integer id) {
        return Optional.ofNullable(this.stateRepository.findOne(id))
                .map(s -> {
                    s.setName(state.getName());
                    return this.stateRepository.save(s);
                })
                .orElseThrow(() -> new RuntimeException("No Exists State"));
    }
}
