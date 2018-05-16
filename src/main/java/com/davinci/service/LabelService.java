package com.davinci.service;

import com.davinci.model.Label;
import com.davinci.repository.LabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class LabelService {

    private LabelRepository labelRepository;

    @Autowired
    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    public Label getLabelById(Integer id) {
        return this.labelRepository.findOne(id);
    }

    public List<Label> getAllLabel() {
        return this.labelRepository.findAll();
    }

    public Label createLabel(Label label) {
        label.setCreated(new Date());
        return this.labelRepository.save(label);
    }

    public void deleteLabel(Integer id) {
        Optional.ofNullable(this.labelRepository.findOne(id))
                .ifPresent(l -> this.labelRepository.delete(l));
    }

    public Label updateLabel(Label label, Integer id) {
        return Optional.ofNullable(this.labelRepository.findOne(id))
                .map(l -> {
                    l.setDescription(label.getDescription());
                    return this.labelRepository.save(l);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Label"));
    }
}
