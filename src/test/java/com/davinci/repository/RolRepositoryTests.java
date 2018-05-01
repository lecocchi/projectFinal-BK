package com.davinci.repository;

import com.davinci.model.Rol;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class RolRepositoryTests extends AbstractRepositoryTests {

    @Resource
    private RolRepository repository;

    @Before
    public void init() {
        super.persistRol();
    }

    @Test
    public void findAllReturnRoles() {
        List<Rol> roles = this.repository.findAll();

        assertThat(roles).doesNotContainNull();

        for (Rol rol : roles) {
            validateRol(rol);
        }
    }

    private void validateRol(Rol rol) {
        assertThat(rol.getName()).isEqualTo(ConstantsTests.Rol.NAME);
    }
}
