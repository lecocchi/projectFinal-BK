package com.davinci.model;

import javax.persistence.*;

@Entity
@Table(name = "user_project")
public class UserProject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;

    @Column(name = "id_user")
    private int id_user;

    @Column(name = "id_project")
    private int id_project;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public int getId_project() {
        return id_project;
    }

    public void setId_project(int id_project) {
        this.id_project = id_project;
    }
}
