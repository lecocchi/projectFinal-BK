package com.davinci.repository;

import com.davinci.model.Phase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhaseRepository extends JpaRepository<Phase, Integer> {
}
