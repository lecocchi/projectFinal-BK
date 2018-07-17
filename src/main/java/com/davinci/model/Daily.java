package com.davinci.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Daily {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	@NotNull
	@Column(name="ID_USER")
	private int idUser;

	@Column(name = "ROL")
	private String rol;

	@Column(name="YESTERDAY")
	private String yesterday;

	@Column(name = "TODAY")
	private String today;

	@NotNull
	@Column(name="CREATED_AT")
	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	private Date createdAt;

	public Daily( int idUser, String rol, String yesterday, String today){
		this.idUser = idUser;
		this.rol = rol;
		this.yesterday = yesterday;
		this.today = today;
		this.createdAt = new Date();
	}

}
