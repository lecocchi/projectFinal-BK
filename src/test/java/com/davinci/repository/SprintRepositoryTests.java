package com.davinci.repository;

import com.davinci.model.Sprint;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class SprintRepositoryTests extends AbstractRepositoryTests {

    @Resource
    private SprintRepository repository;

    @Before
    public void init() {
        super.persistSprint();
    }

    @Test
    public void findAllReturnSprints() {
        List<Sprint> sprints = this.repository.findAll();

        assertThat(sprints).doesNotContainNull();

        for (Sprint sprint : sprints) {
            validateSprint(sprint);
        }
    }

    private void validateSprint(Sprint sprint) {
        assertThat(sprint.getName()).isEqualTo(ConstantsTests.Sprint.NAME);
    }
}
