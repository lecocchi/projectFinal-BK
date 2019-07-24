package com.davinci.repository;

import com.davinci.model.UserProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserProjectRepository extends JpaRepository<UserProject, Integer> {

    @Query("SELECT up FROM UserProject up where up.id_user = :id")
    List<UserProject> findByIdUser(@Param("id") int id);
}
