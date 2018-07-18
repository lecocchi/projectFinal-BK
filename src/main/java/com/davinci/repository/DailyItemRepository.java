package com.davinci.repository;

import com.davinci.model.DailyItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DailyItemRepository extends JpaRepository<DailyItem, Long> {
}
