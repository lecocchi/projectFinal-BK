package com.davinci.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="COMMENT")
public class Comment implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	@Column(name="DESCRIPTION")
	private String description;

	@Column(name="ID_ISSUE")
	private int idIssue;

	@Column(name = "ID_USER")
	private int idUser;

	@Column(name="CREATED_AT")
	private Date createdAt;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public int getIdUser() { return idUser; }

	public void setIdUser(int idUser) { this.idUser = idUser; }

	public void setDescription(String description) {
		this.description = description;
	}

	public int getIdIssue() {
		return idIssue;
	}

	public void setIdIssue(int idIssue) {
		this.idIssue = idIssue;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
}
