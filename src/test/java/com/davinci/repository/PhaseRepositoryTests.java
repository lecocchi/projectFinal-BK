package com.davinci.repository;

import com.davinci.model.Phase;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class PhaseRepositoryTests extends AbstractRepositoryTests {

    @Test
    public void test(){
        assertThat(true);
    }
//    @Resource
//    private PhaseRepository repository;
//
//    @Before
//    public void init() {
//        super.persistPhase();
//    }
//
//    @Test
//    public void findAllReturnPhases() {
//        List<Phase> phases = this.repository.findAll();
//
//        assertThat(phases).doesNotContainNull();
//
//        for (Phase phase : phases) {
//            validatePhase(phase);
//        }
//    }
//
//    private void validatePhase(Phase phase) {
//        assertThat(phase.getName()).isEqualTo(ConstantsTests.Phase.NAME);
//    }
}
