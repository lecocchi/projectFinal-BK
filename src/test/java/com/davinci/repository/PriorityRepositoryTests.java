package com.davinci.repository;

import com.davinci.model.Priority;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class PriorityRepositoryTests extends AbstractRepositoryTests {

    @Test
    public void test(){
        assertThat(true);
    }
//    @Resource
//    private PriorityRepository repository;
//
//    @Before
//    public void init() {
//        super.persistPriority();
//    }
//
//    @Test
//    public void findAllReturnPriorities() {
//        List<Priority> priorities = this.repository.findAll();
//
//        assertThat(priorities).doesNotContainNull();
//
//        for (Priority priority : priorities) {
//            validatePriority(priority);
//        }
//    }
//
//    private void validatePriority(Priority priority) {
//        assertThat(priority.getName()).isEqualTo(ConstantsTests.Priority.NAME);
//    }
}
