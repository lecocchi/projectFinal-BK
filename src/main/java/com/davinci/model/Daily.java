package com.davinci.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Daily {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	@NotNull
	private String userName;
	private String avatar;
	@Convert(converter= Jsr310JpaConverters.LocalDateTimeConverter.class)
	private LocalDateTime createdAt;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "daily_id")
	List<DailyItem> items;

	public Daily(String firstName, String lastName, String userName, String avatar, LocalDateTime createdAt, List<DailyItem> items) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.avatar = avatar;
		this.items = items;
		this.createdAt = createdAt;
	}
}
