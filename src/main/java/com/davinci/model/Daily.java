package com.davinci.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
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
	@Convert(converter= Jsr310JpaConverters.LocalDateConverter.class)
	private LocalDate createdAt;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "daily_id")
	List<DailyItem> items;
	@NotNull
	private String sprint;

	@NotNull
	@Column(name = "id_project")
	private int idProject;

	public Daily(String firstName, String lastName, String userName, String avatar, LocalDate createdAt, List<DailyItem> items, String sprint, int idProject) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.avatar = avatar;
		this.items = items;
		this.createdAt = createdAt;
		this.sprint = sprint;
		this.idProject = idProject;
	}

	public Daily() {
	}

	public Daily(Long id, String firstName, String lastName, String userName, String avatar, LocalDate createdAt, List<DailyItem> items, String sprint, int idProject) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.avatar = avatar;
		this.createdAt = createdAt;
		this.items = items;
		this.sprint = sprint;
		this.idProject = idProject;
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

	public LocalDate getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}

	public List<DailyItem> getItems() {
		return items;
	}

	public void setItems(List<DailyItem> items) {
		this.items = items;
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
