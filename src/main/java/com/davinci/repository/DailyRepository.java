package com.davinci.repository;

import com.davinci.model.Daily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface DailyRepository extends JpaRepository<Daily, Long> {

    @Query("select d from Daily d where d.createdAt  =:date")
    Daily findByCreatedAt (@Param("date") LocalDate date);

}
