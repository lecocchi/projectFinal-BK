package com.davinci.mapper;

import com.davinci.dto.DailyDTO;
import com.davinci.dto.DailyItemDTO;
import com.davinci.dto.DateDTO;
import com.davinci.model.Daily;
import com.davinci.model.DailyItem;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class DailyMapper {

    public static Daily to(DailyDTO dailyDTO){

        List<DailyItem> items = new ArrayList<>();

        dailyDTO.getDailyItems().stream().forEach( item ->{
            items.add(new DailyItem(item.getFirstName(), item.getLastName(), item.getUserName(), item.getAvatar(), item.getYesterday(), item.getToday(), LocalDate.now()));
        });

        return new Daily(dailyDTO.getFirstName(), dailyDTO.getLastName(), dailyDTO.getUserName(), dailyDTO.getAvatar(), LocalDate.now(), items);
    }

    public static DailyDTO from(Daily daily){

        List<DailyItemDTO> items = new ArrayList<>();

        daily.getItems().stream().forEach( item ->{
            items.add(new DailyItemDTO(item.getFirstName(), item.getLastName(), item.getUserName(), item.getAvatar(), item.getYesterday(), item.getToday()));
        });

        return new DailyDTO(daily.getId(),daily.getFirstName(), daily.getLastName(), daily.getUserName(), daily.getAvatar(), new DateDTO(daily.getCreatedAt().getDayOfMonth(), daily.getCreatedAt().getDayOfWeek(), daily.getCreatedAt().getDayOfYear(), daily.getCreatedAt().getMonth(), daily.getCreatedAt().getMonthValue(), daily.getCreatedAt().getYear()), items);
    }
}
