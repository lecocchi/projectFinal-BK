package com.davinci.mapper;

import com.davinci.dto.DailyDTO;
import com.davinci.dto.DailyItemDTO;
import com.davinci.model.Daily;
import com.davinci.model.DailyItem;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class DailyMapper {

    public static Daily to(DailyDTO daily){

        List<DailyItem> items = new ArrayList<>();

        daily.getDailyItems().stream().forEach( item ->{
            items.add(new DailyItem(item.getFirstName(), item.getLastName(), item.getUserName(), item.getAvatar(), item.getYesterday(), item.getToday(), LocalDateTime.now()));
        });

        return new Daily(daily.getFirstName(), daily.getLastName(), daily.getUserName(), daily.getAvatar(), LocalDateTime.now(), items);
    }

    public static DailyDTO from(Daily daily){

        List<DailyItemDTO> items = new ArrayList<>();

        daily.getItems().stream().forEach( item ->{
            items.add(new DailyItemDTO(item.getFirstName(), item.getLastName(), item.getUserName(), item.getAvatar(), item.getYesterday(), item.getToday()));
        });

        return new DailyDTO(daily.getFirstName(), daily.getLastName(), daily.getUserName(), daily.getAvatar(), daily.getCreatedAt(), items);
    }
}
