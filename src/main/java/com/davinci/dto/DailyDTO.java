package com.davinci.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.Convert;
import java.time.LocalDate;
import java.util.List;


@JsonIgnoreProperties(ignoreUnknown = true)
public class DailyDTO {

	@JsonProperty("id")
	private Long id;
	@JsonProperty("firstName")
	private String firstName;
	@JsonProperty("lastName")
	private String lastName;
	@JsonProperty("userName")
	private String userName;
	private String avatar;
	@JsonProperty("created_at")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-mm-dd")
	private DateDTO createdAt;
	@JsonProperty("daily_items")
	List<DailyItemDTO> dailyItems;
	@JsonProperty("sprint")
	private String sprint;

	@JsonProperty("id_project")
	private int idProject;

	public DailyDTO(Long id, String firstName, String lastName, String userName, String avatar, DateDTO createdAt, List<DailyItemDTO> dailyItems, String sprint, int idProject) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.avatar = avatar;
		this.createdAt = createdAt;
		this.dailyItems = dailyItems;
		this.sprint = sprint;
		this.idProject = idProject;
	}

	public DailyDTO() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public DateDTO getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(DateDTO createdAt) {
		this.createdAt = createdAt;
	}

	public List<DailyItemDTO> getDailyItems() {
		return dailyItems;
	}

	public void setDailyItems(List<DailyItemDTO> dailyItems) {
		this.dailyItems = dailyItems;
	}

	public String getSprint() {
		return sprint;
	}

	public void setSprint(String sprint) {
		this.sprint = sprint;
	}

	public int getIdProject() {
		return idProject;
	}

	public void setIdProject(int idProject) {
		this.idProject = idProject;
	}
}
