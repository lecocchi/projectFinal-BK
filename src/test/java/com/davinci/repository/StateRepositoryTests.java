package com.davinci.repository;

import com.davinci.model.State;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class StateRepositoryTests extends AbstractRepositoryTests {

    @Resource
    private StateRepository repository;

    @Before
    public void init() {
        super.persistState();
    }

    @Test
    public void findAllReturnStates() {
        List<State> states = this.repository.findAll();

        assertThat(states).doesNotContainNull();

        for (State state : states) {
            validateState(state);
        }
    }

    private void validateState(State state) {
        assertThat(state.getName()).isEqualTo(ConstantsTests.State.NAME);
    }
}
