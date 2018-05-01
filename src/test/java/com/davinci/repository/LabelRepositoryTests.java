package com.davinci.repository;

import com.davinci.model.Label;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class LabelRepositoryTests extends AbstractRepositoryTests {

    @Resource
    private LabelRepository repository;

    @Before
    public void init() {
        super.persistLabel();
    }

    @Test
    public void findAllReturnLabels() {
        List<Label> labels = this.repository.findAll();

        assertThat(labels).doesNotContainNull();

        for (Label label : labels) {
            validateLabel(label);
        }
    }

    private void validateLabel(Label label) {
        assertThat(label.getName()).isEqualTo(ConstantsTests.Label.NAME);
    }
}
