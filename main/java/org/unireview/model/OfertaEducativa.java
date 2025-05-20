package org.unireview.model;

public class OfertaEducativa {
	private Long idoferta_educativa;
	private String ofed_enlace;
	private static Long total = Long.valueOf(0);
	private Escuela escuela;
	private Carrera carrera;
	
	
	//constructor
	public OfertaEducativa(String ofed_enlace, Escuela escuela, Carrera carrera) {
		super();
		this.ofed_enlace = ofed_enlace;
		this.escuela = escuela;
		this.carrera = carrera;
		OfertaEducativa.total++;
		this.idoferta_educativa = OfertaEducativa.total;
	}

	//getters and setters
	public String getOfed_enlace() {
		return ofed_enlace;
	}
	
	public void setOfed_enlace(String ofed_enlace) {
		this.ofed_enlace = ofed_enlace;
	}
	public Long getIdoferta_educativa() {
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
