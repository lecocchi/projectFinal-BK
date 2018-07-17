package com.davinci.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DailyDTO {

	@NotNull
	@JsonProperty("id_user")
	private int idUser;

	@NotNull
	private String rol;

	private String yesterday;

	private String today;
}
