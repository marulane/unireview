package org.unireview.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ofertaEducativa")
public class OfertaEducativa {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idoferta_educativa", unique = true, nullable = false)
	private Integer idoferta_educativa;
	
	@Column(name="ofed_enlace", nullable = false)
	private String ofed_enlace;
	//private static Long total = Long.valueOf(0);
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idescuela_fk", referencedColumnName = "idescuela")
	@JsonIgnoreProperties ({"hibernateLazyInitializer", "handler"})
	private Escuela escuela;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idcarrera_fk", referencedColumnName = "idcarrera")
	@JsonIgnoreProperties ({"hibernateLazyInitializer", "handler"})
	private Carrera carrera;
	
	
	//constructor
	public OfertaEducativa(String ofed_enlace, Escuela escuela, Carrera carrera) {
		super();
		this.ofed_enlace = ofed_enlace;
		this.escuela = escuela;
		this.carrera = carrera;
		//OfertaEducativa.total++;
		//this.idoferta_educativa = OfertaEducativa.total;
	}
	
	public OfertaEducativa() {
		//OfertaEducativa.total++;
		//this.idoferta_educativa= OfertaEducativa.total;
	}

	//getters and setters
	public String getOfed_enlace() {
		return ofed_enlace;
	}
	
	public void setOfed_enlace(String ofed_enlace) {
		this.ofed_enlace = ofed_enlace;
	}
	public Integer getIdoferta_educativa() {
		return idoferta_educativa;
	}
	
	
	//llave foranea
	public Escuela getEscuela() {
		return escuela;
	}
	public void setEscuela(Escuela escuela) {
		this.escuela = escuela;
	}
	public Carrera getCarrera() {
		return carrera;
	}
	public void setCarrera(Carrera carrera) {
		this.carrera = carrera;
	}

	//to string
	@Override
	public String toString() {
		return "OfertaEducativa [idoferta_educativa=" + idoferta_educativa + ", ofed_enlace=" + ofed_enlace
				+ ", escuela=" + escuela + ", carrera=" + carrera + "]";
	}

	
}


