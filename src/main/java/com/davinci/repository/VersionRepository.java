package com.davinci.repository;

import com.davinci.model.Version;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VersionRepository extends JpaRepository<Version, Integer> {

    @Query(value = "SELECT * FROM version WHERE id_project =:idProject", nativeQuery = true)
    List<Version> findAllByProject(@Param("idProject") int idProject);

}
