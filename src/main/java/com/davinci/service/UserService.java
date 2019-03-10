package com.davinci.service;

import com.davinci.dto.ChangePassword;
import com.davinci.exceptions.LoginErrorException;
import com.davinci.exceptions.ThereIsUserException;
import com.davinci.exceptions.UserNotFoundException;
import com.davinci.model.User;
import com.davinci.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(Integer id) {
        return this.userRepository.findOne(id);
    }

    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

    public User createUser(User user) {

        userRepository.findByEmail(user.getEmail())
                .ifPresent((u) -> {
                    throw new ThereIsUserException("Ya existe un usuario con el email '" + user.getEmail() + "'");
                });

        userRepository.findByUserName(user.getUserName())
                .ifPresent((u) -> {
                    throw new ThereIsUserException("Ya existe un usuario con el nombre de usuario '" + user.getUserName() + "'");
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
}
