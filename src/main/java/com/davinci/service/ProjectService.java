package com.davinci.service;

import com.davinci.model.Project;
import com.davinci.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    public ProjectRepository projectRepository;


    public Project create(Project project){
        return projectRepository.save(project);
    }

    public List<Project> getAllProject(){
        return projectRepository.findAll();
    }

    public Project update(Project project){
        return projectRepository.save(project);
    }

}
