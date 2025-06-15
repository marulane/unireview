package org.unireview.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "escuela")
public class Escuela {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idescuela", unique = true, nullable = false)
	private Integer idescuela;
	
	@Column(name="esc_nombre", nullable = false)
	private String esc_nombre;
	
	@Column(name="esc_ubicacion", nullable = false)
	private String esc_ubicacion;
	
	@Column(name="esc_enlace", nullable = false)
	private String esc_enlace;
	//private static Long total = Long.valueOf(0);
	
	//constructor
	public Escuela(String esc_nombre, String esc_ubicacion, String esc_enlace) {
		super();
		this.esc_nombre = esc_nombre;
		this.esc_ubicacion = esc_ubicacion;
		this.esc_enlace = esc_enlace;
		//Escuela.total++;
		//this.idescuela = Escuela.total;
	}
	
	//constructor vacio
	public Escuela() {
		//Escuela.total++;
		//this.idescuela = Escuela.total;
	}

	//getters and setters
	public String getEsc_nombre() {
		return esc_nombre;
	}

	public void setEsc_nombre(String esc_nombre) {
		this.esc_nombre = esc_nombre;
	}

	public String getesc_ubicacion() {
		return esc_ubicacion;
	}

	public void setesc_ubicacion(String esc_ubicacion) {
		this.esc_ubicacion = esc_ubicacion;
	}

	public String getEsc_enlace() {
		return esc_enlace;
	}

	public void setEsc_enlace(String esc_enlace) {
		this.esc_enlace = esc_enlace;
	}

	public Integer getIdescuela() {
		return idescuela;
	}
	
	
	// to string
	@Override
	public String toString() {
		return "Escuela [idescuela=" + idescuela + ", esc_nombre=" + esc_nombre + ", esc_ubicacion=" + esc_ubicacion
				+ ", esc_enlace=" + esc_enlace + "]";
	}
	
	
	
}
