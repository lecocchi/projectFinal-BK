package com.davinci.service;

import com.davinci.dto.ProjectUsers;
import com.davinci.exceptions.ActiveSprintNotFoundException;
import com.davinci.model.Project;
import com.davinci.model.UserProject;
import com.davinci.repository.ProjectRepository;
import com.davinci.repository.SprintRepository;
import com.davinci.repository.UserProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ProjectService {

    @Autowired
    public ProjectRepository projectRepository;

    @Autowired
    public UserProjectRepository userProjectRepository;

    @Autowired
    public SprintRepository sprintRepository;


    public Project create(Project project){
        return projectRepository.save(project);
    }

    public List<Project> getAllProject(){
        return projectRepository.findAll();
    }

    public Project update(Project project){
        return projectRepository.save(project);
    }

    public void addUsersInProject(ProjectUsers projectUsers) {


        userProjectRepository.findByIdProject(projectUsers.getProject_id())
                .forEach(u->{
                    userProjectRepository.delete(u.id);
                });

        projectUsers.getUsers().forEach((u)->{
            userProjectRepository.save(new UserProject(u, projectUsers.getProject_id()));
        });
    }

    public void deleteProject(int id){
        sprintRepository.findByIsActiveIsTrueByProject(id)
                .ifPresent( s ->{
                    throw new ActiveSprintNotFoundException("No se puede eliminar el proyecto porque existe un sprint activo.");
                });
        userProjectRepository.findByIdProject(id)
                .forEach(u->{
                    userProjectRepository.delete(u.id);
                });
        projectRepository.delete(id);
    }
}
