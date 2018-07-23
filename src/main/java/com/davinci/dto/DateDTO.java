package com.davinci.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.DayOfWeek;
import java.time.Month;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DateDTO {

    private Integer dayOfMonth;
    private DayOfWeek dayOfWeek;
    private Integer dayOfYear;
    private Month month;
    private Integer monthValue;
    private Integer year;
}
