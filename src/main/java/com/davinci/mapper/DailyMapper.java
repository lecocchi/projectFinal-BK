package com.davinci.mapper;

import com.davinci.dto.DailyDTO;
import com.davinci.model.Daily;
import com.davinci.model.DailyItem;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DailyMapper {

    public static Daily from (DailyDTO daily){

        List<DailyItem> items = new ArrayList<>();

        daily.getDailyItems().stream().forEach( item ->{
            items.add(new DailyItem(item.getFirstNAme(), item.getLastName(), item.getUserName(), item.getAvatar(), item.getYesterday(), item.getToday(), LocalDateTime.now()));
        });

        return new Daily(daily.getFirstName(), daily.getLastName(), daily.getUserName(), LocalDateTime.now(), items);
    }
}
