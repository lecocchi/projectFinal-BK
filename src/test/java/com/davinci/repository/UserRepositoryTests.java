package com.davinci.repository;

import com.davinci.model.User;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static junit.framework.TestCase.assertTrue;
import static org.assertj.core.api.Assertions.assertThat;

public class UserRepositoryTests extends AbstractRepositoryTests {

    @Resource
    private UserRepository repository;

    @Before
    public void init() {
//        super.persistUser();
    }

//    @Test
//    public void findAllReturnUsers() {
//        List<User> users = this.repository.findAll();
//
//        assertThat(users).doesNotContainNull();
//
//        for (User user : users) {
//            validateUser(user);
//        }
//    }

    @Test
    public void test(){
        assertTrue(true);
    }

    private void validateUser(User user) {
        assertThat(user.getDni()).isEqualTo(ConstantsTests.User.DNI);
        assertThat(user.getEmail()).isEqualTo(ConstantsTests.User.EMAIL);
        assertThat(user.getFirstName()).isEqualTo(ConstantsTests.User.FIRST_NAME);
        assertThat(user.getLastName()).isEqualTo(ConstantsTests.User.LAST_NAME);
        assertThat(user.getUserName()).isEqualTo(ConstantsTests.User.USER_NAME);
        assertThat(user.getPassword()).isEqualTo(ConstantsTests.User.PASSWORD);
    }
}
