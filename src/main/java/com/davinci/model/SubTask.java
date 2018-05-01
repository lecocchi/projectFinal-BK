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
@Table(name="SUBTASK")
public class SubTask implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="ID_TASK")
	private int idTask;
	
	@Column(name="ID_PHASE")
	private int idPhase;
	
	@Column(name="ID_STATE")
	private int idState;
	
	@Column(name="ID_ASSIGNEE")
	private int idAssignee;
	
	@Column(name="ID_REPORTER")
	private int idReporter;
	
	@Column(name="CREATED")
	private Date created;
	
	@Column(name="UPDATED")
	private Date updated;
	
	@Column(name="RESOLVED")
	private Date resolved;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdTask() {
		return idTask;
	}

	public void setIdTask(int idTask) {
		this.idTask = idTask;
	}

	public int getIdPhase() {
		return idPhase;
	}

	public void setIdPhase(int idPhase) {
		this.idPhase = idPhase;
	}

	public int getIdState() {
		return idState;
	}

	public void setIdState(int idState) {
		this.idState = idState;
	}

	public int getIdAssignee() {
		return idAssignee;
	}

	public void setIdAssignee(int idAssignee) {
		this.idAssignee = idAssignee;
	}

	public int getIdReporter() {
		return idReporter;
	}

	public void setIdReporter(int idReporter) {
		this.idReporter = idReporter;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getUpdated() {
		return updated;
	}

	public void setUpdated(Date updated) {
		this.updated = updated;
	}

	public Date getResolved() {
		return resolved;
	}

	public void setResolved(Date resolved) {
		this.resolved = resolved;
	}
}
