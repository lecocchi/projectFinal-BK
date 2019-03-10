package com.davinci.repository;

import com.davinci.model.DailyItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DailyItemRepository extends JpaRepository<DailyItem, Long> {

    @Query(value = "select * from daily_item where daily_id = ?1", nativeQuery = true)
    List<DailyItem> findByDailyId(@Param("dailyId") String dailyId);
}
