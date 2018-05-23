package com.davinci.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DailyUser {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    @Column(name = "DAILY_ID")
    private int dailyId;

    @NotNull
    @Column(name = "USER_ID")
    private int userId;

    @Column(name = "YESTERDAY")
    private String yesterday;

    @Column(name = "TODAY")
    private String today;

}
