package org.unireview.model;

public class Carrera {
	private Long idcarrera;
	private String carr_nombre;
	private Double carr_evaluacion_prom;
	private static Long total = Long.valueOf(0);
	
	
	//constructor
	public Carrera(String carr_nombre, Double carr_evaluacion_prom) {
		super();
		this.carr_nombre = carr_nombre;
		this.carr_evaluacion_prom = carr_evaluacion_prom;
		Carrera.total++;
		this.idcarrera = Carrera.total;
	}
	
	//Constructor vacío
	public Carrera() {
		Carrera.total++;
		this.idcarrera= Carrera.total;
	}


	//getters and setters
	public Long getIdcarrera() {
		return idcarrera;
	}
	
	public String getCarr_nombre() {
		return carr_nombre;
	}


	public void setCarr_nombre(String carr_nombre) {
		this.carr_nombre = carr_nombre;
	}


	public Double getCarr_evaluacion_prom() {
		return carr_evaluacion_prom;
	}


	public void setCarr_evaluacion_prom(Double carr_evaluacion_prom) {
		this.carr_evaluacion_prom = carr_evaluacion_prom;
	}


	//to string
	@Override
	public String toString() {
		return "Carrera [idcarrera=" + idcarrera + ", carr_nombre=" + carr_nombre + ", carr_evaluacion_prom="
				+ carr_evaluacion_prom + "]";
	}



	
	

}
