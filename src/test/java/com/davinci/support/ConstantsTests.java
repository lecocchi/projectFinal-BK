package com.davinci.support;

public interface ConstantsTests {

    interface User {
        String FIRST_NAME = "first name";
        String LAST_NAME = "last name";
        Integer DNI = 123456;
        String EMAIL = "email@test.com";
        String USER_NAME = "username";
        String PASSWORD = "password";
    }

    interface Rol {
        String NAME = "Rol";
    }

    interface Label {
        String NAME = "Label";
    }

    interface Phase {
        String NAME = "Phase";
    }

    interface Priority {
        String NAME = "Priority";
    }

    interface Sprint {
        String NAME = "Sprint";
    }

    interface State {
        String NAME = "State";
    }

    interface Version {
        String NAME = "Version";
    }

    interface Issue {
        String TITLE = "Title";
        Integer WATCHER = 123;
        Integer ESTIMATED = 123;
        Integer REMAINING = 123;
    }
}