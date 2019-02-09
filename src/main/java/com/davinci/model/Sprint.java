package com.davinci.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sprint implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "DATE_FROM")
    private Date dateFrom;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "DATE_TO")
    private Date dateTo;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name = "CREATED_AT")
    private Date created;

    @NotNull
    @Column(name = "ENABLED")
    private Boolean enabled;

    @NotNull
    @Column(name = "IS_ACTIVE")
    private Boolean isActive;


    public Sprint(String name, String description, Date dateFrom, Date dateTo, Date created, Boolean enabled,Boolean isActive) {
        this.name = name;
        this.description  = description;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.created = created;
        this.enabled = enabled;
        this.isActive = isActive;
    }
}
