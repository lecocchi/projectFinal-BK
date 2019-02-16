package com.davinci.service;

import com.davinci.exceptions.LoginErrorException;
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
                    return this.userRepository.save(u);
                })
                .orElseThrow(() -> new RuntimeException("No Exists User"));
    }

    public User getUserByUserAndPass(final String userName, final String password){
        Optional<User> userOptional = userRepository.findByEmailAndPassword(userName,password);

        if (!userOptional.isPresent())
            throw new LoginErrorException("Error to try login with user: " + userName + " and password: " + password);

        return userOptional.get();
    }
}
