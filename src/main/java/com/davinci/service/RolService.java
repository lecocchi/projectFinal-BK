package com.davinci.service;

import com.davinci.model.Rol;
import com.davinci.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RolService {

    private RolRepository rolRepository;

    @Autowired
    public RolService(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }

    public Rol getRolById(Integer id) {
        return this.rolRepository.findOne(id);
    }

    public List<Rol> getAllRol() {
        return this.rolRepository.findAll();
    }

    public Rol createRol(Rol rol) {
        rol.setCreated(new Date());
        return this.rolRepository.save(rol);
    }

    public void deleteRol(Integer id) {
        Optional.ofNullable(this.rolRepository.findOne(id))
                .ifPresent(r -> this.rolRepository.delete(r));
    }

    public Rol updateRol(Rol rol, Integer id) {
        return Optional.ofNullable(this.rolRepository.findOne(id))
                .map(r -> {
                    r.setName(rol.getName());
                    return this.rolRepository.save(r);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Rol"));
    }
}
