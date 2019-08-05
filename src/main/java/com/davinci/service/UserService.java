package com.davinci.service;

import com.davinci.dto.ChangePassword;
import com.davinci.dto.IdsProject;
import com.davinci.dto.UserProjects;
import com.davinci.exceptions.LoginErrorException;
import com.davinci.exceptions.ThereIsUserException;
import com.davinci.exceptions.UserNotFoundException;
import com.davinci.model.Project;
import com.davinci.model.User;
import com.davinci.model.UserProject;
import com.davinci.repository.ProjectRepository;
import com.davinci.repository.UserProjectRepository;
import com.davinci.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository userRepository;
    private UserProjectRepository userProjectRepository;
    private ProjectRepository projectRepository;

    @Autowired
    public UserService(UserRepository userRepository, UserProjectRepository userProjectRepository,
                       ProjectRepository projectRepository) {
        this.userRepository = userRepository;
        this.userProjectRepository = userProjectRepository;
        this.projectRepository = projectRepository;
    }

    public User getUserById(Integer id) {
        return this.userRepository.findOne(id);
    }

    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

    public User createUser(User user) {

        userRepository.findByUserName(user.getUserName())
                .ifPresent((u) -> {

                    for (int i = 1 ; i < 1000 ; i++){
                        String suggestingUserName = user.getUserName() + i;
                        if (!userRepository.findByUserName(suggestingUserName).isPresent()){
                            throw new ThereIsUserException("Ya existe el nombre de usuario '" + user.getUserName() + "', disponible esta el nombre de usuario '" + suggestingUserName + "'");
                        }
                    }

                });

        user.setCreated(new Date());
        user.setUpdated(new Date());
        return this.userRepository.save(user);
    }

    public void deleteUser(Integer id) {
        Optional.ofNullable(this.userRepository.findOne(id))
                .ifPresent(u -> this.userRepository.delete(u));
    }

    public User updateUser(User user, Integer id) {
        return Optional.ofNullable(this.userRepository.findOne(id))
                .map(u -> {
                    u.setDni(user.getDni());
                    u.setEmail(user.getEmail());
                    u.setEnabled(user.getEnabled());
                    u.setFirstName(user.getFirstName());
                    u.setLastName(user.getLastName());
                    u.setPassword(user.getPassword());
                    u.setRol(user.getRol());
                    u.setUpdated(new Date());
                    u.setUserName(user.getUserName());
                    u.setIsNetwork(user.getIsNetwork());
                    return this.userRepository.save(u);
                })
                .orElseThrow(() -> new RuntimeException("No Exists User"));
    }

    public User getUserByUserAndPass(final String userName, final String password){
        Optional<User> userOptional = userRepository.findByUserNameAndPassword(userName,password);

        return userOptional
                .orElseThrow(()-> new LoginErrorException("Error to try login with user: " + userName + " and password: " + password));
    }

    public User changePassword(ChangePassword changePassword){
        Optional<User> userOptional = userRepository.findByEmail(changePassword.getEmail());

        return userRepository.save(userOptional
                .map( (user -> {
                    user.setPassword(changePassword.getPassword());
                    return user;
                }))
                .orElseThrow(()-> new UserNotFoundException("No se ha encontrado al usuario para cambiar la contraseña"))
        );
    }

    public User loginGooglePlus(final String email){
        Optional<User> userOptional = userRepository.findByEmailAndIsNetworkIsTrue(email);

        userOptional.orElseThrow(()->new UserNotFoundException("Usuario no registrado"));

        return userOptional.get();

    }

    @Transactional
    public void addProjecstByUser(UserProjects userProjects){

        userProjectRepository.findByIdUser(userProjects.getUser_id())
                .forEach((up)-> userProjectRepository.delete(up));

        userProjects.getProjects().forEach(
                p -> userProjectRepository.save(new UserProject(userProjects.getUser_id(), p))
        );
    }

    public List<Project> getProjectsByUserId(int id){

        List<UserProject> userProjectList = userProjectRepository.findByIdUser(id);

        List<Project> projects = new ArrayList<>();

        for (UserProject project: userProjectList) {
            projects.add(projectRepository.findOne(project.getId_project()));
        }

        return projects;
    }

    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    public List<User> getUsersByProject(int projectId){
        return userProjectRepository.findByIdProject(projectId).stream()
                .map((up)-> userRepository.findOne(up.getId_user()))
                .collect(Collectors.toList());
    }

    public List<Project> getProjectsByListIds(IdsProject ids) {
        return ids.getIds().stream()
                .map((i)-> projectRepository.findOne(i))
                .collect(Collectors.toList());
    }
}
