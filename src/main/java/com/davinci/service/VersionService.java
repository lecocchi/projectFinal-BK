package com.davinci.service;

import com.davinci.model.Version;
import com.davinci.repository.VersionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class VersionService {

    private VersionRepository versionRepository;

    @Autowired
    public VersionService(VersionRepository versionRepository) {
        this.versionRepository = versionRepository;
    }

    public Version getVersionById(Integer id) {
        return this.versionRepository.findOne(id);
    }

    public List<Version> getAllVersion() {
        return this.versionRepository.findAll();
    }

    public Version createVersion(Version version) {
        version.setCreated(new Date());
        return this.versionRepository.save(version);
    }

    public void deleteVersion(Integer id) {
        Optional.ofNullable(this.versionRepository.findOne(id))
                .ifPresent(v -> this.versionRepository.delete(v));
    }

    public Version updateVersion(Version version, Integer id) {
        return Optional.ofNullable(this.versionRepository.findOne(id))
                .map(v -> {
                    v.setName(version.getName());
                    return this.versionRepository.save(v);
                })
                .orElseThrow(() -> new RuntimeException("No Exists Version"));
    }
}
