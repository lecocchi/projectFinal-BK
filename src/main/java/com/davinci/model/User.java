package com.davinci.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class    User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty
    @Column(name = "FIRST_NAME")
    private String firstName;

    @NotEmpty
    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "DNI")
    private Integer dni;

    @Column(name = "EMAIL")
    private String email;

    @NotEmpty
    @Column(name = "USER_NAME")
    private String userName;

    @NotNull
    @Column(name = "ID_ROL")
    private Integer rol;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "AVATAR")
    private String avatar;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "CREATED_AT")
    private Date created;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "UPDATED_AT")
    private Date updated;

    @NotNull
    @Column(name = "ENABLED")
    private Boolean enabled;

    @NotNull
    @Column(name = "IS_NETWORK")
    private Boolean isNetwork;


    public User(String firstName, String lastName, Integer dni, String email, String userName, Integer rol, String password, String avatar, Date created, Date updated, Boolean enabled, Boolean isNetwork) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.email = email;
        this.userName = userName;
        this.rol = rol;
        this.password = password;
        this.avatar = avatar;
        this.created = created;
        this.updated = updated;
        this.enabled = enabled;
        this.isNetwork = isNetwork;
    }
}
