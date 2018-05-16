package com.davinci.support;

import com.davinci.model.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.Date;

@DataJpaTest
@RunWith(SpringJUnit4ClassRunner.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public abstract class AbstractRepositoryTests {

    @Resource
    private TestEntityManager entityManager;

    private User user;
    private Rol rol;
    private Label label;
    private Phase phase;
    private Priority priority;
    private Sprint sprint;
    private State state;
    private Version version;
    private Issue issue;

    public void persistRol() {
        this.rol = new Rol(ConstantsTests.Rol.NAME, new Date());
        this.entityManager.persist(this.rol);
    }

    public void persistUser() {
        if (this.user == null) {
            this.persistRol();

            this.user = new User(ConstantsTests.User.FIRST_NAME,
                    ConstantsTests.User.LAST_NAME,
                    ConstantsTests.User.DNI,
                    ConstantsTests.User.EMAIL,
                    ConstantsTests.User.USER_NAME,
                    this.rol.getId(),
                    ConstantsTests.User.PASSWORD,
                    new Date(),
                    new Date(),
                    Boolean.TRUE);
            this.entityManager.persist(this.user);
        }
    }

    public void persistLabel() {
        this.label = new Label(ConstantsTests.Label.NAME, null,  new Date());
        this.entityManager.persist(this.label);
    }

    public void persistPhase() {
        this.phase = new Phase(ConstantsTests.Phase.NAME, null, new Date());
        this.entityManager.persist(this.phase);
    }

    public void persistPriority() {
        this.priority = new Priority(ConstantsTests.Priority.NAME, new Date());
        this.entityManager.persist(this.priority);
    }

    public void persistSprint() {
        this.sprint = new Sprint(ConstantsTests.Sprint.NAME, new Date(), new Date(), new Date(), Boolean.TRUE);
        this.entityManager.persist(sprint);
    }

    public void persistState() {
        this.state = new State(ConstantsTests.State.NAME, new Date());
        this.entityManager.persist(this.state);
    }

    public void persistVersion() {
        this.version = new Version(ConstantsTests.Version.NAME, null, new Date());
        this.entityManager.persist(this.version);
    }

    public void persistIssue() {
        if (this.issue == null) {
            this.persistUser();
            this.persistLabel();
            this.persistPhase();
            this.persistPriority();
            this.persistSprint();
            this.persistState();
            this.persistVersion();

            this.issue = new Issue(this.label.getId(),
                    this.phase.getId(),
                    this.priority.getId(),
                    this.getSprint().getId(),
                    this.state.getId(),
                    this.user.getId(),
                    this.user.getId(),
                    this.version.getId(),
                    ConstantsTests.Issue.TITLE,
                    ConstantsTests.Issue.WATCHER,
                    new Date(),
                    new Date(),
                    new Date(),
                    new Date(),
                    new Date(),
                    ConstantsTests.Issue.ESTIMATED,
                    ConstantsTests.Issue.REMAINING,
                    Boolean.TRUE,
                    Boolean.TRUE);
            this.entityManager.persist(this.issue);
        }
    }

    public Sprint getSprint() {
        return sprint;
    }
}
