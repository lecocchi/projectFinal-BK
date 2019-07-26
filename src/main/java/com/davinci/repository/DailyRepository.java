package com.davinci.repository;

import com.davinci.model.Daily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface DailyRepository extends JpaRepository<Daily, Long> {

    @Query("select d from Daily d where d.createdAt  =:date and d.idProject =:idProject")
    Daily findByCreatedAt (@Param("date") LocalDate date, @Param("idProject") int idProject);

    @Query(value = "select * from daily where   id_project=:idProject", nativeQuery = true)
    List<Daily> findAllByProject (@Param("idProject") int idProject);

}
