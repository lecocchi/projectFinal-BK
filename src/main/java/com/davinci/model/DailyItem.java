package com.davinci.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DailyItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private String userName;
    private String avatar;
    private String yesterday;
    private String today;
    @Convert(converter= Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime createdAt;

    public DailyItem(String firstName, String lastName, String userName, String avatar, String yesterday, String today, LocalDateTime createdAt) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.avatar = avatar;
        this.yesterday = yesterday;
        this.today = today;
        this.createdAt = createdAt;
    }
}
