package org.unireview.model;

import java.time.LocalDate;

public class Publicacion {
	private Long idpublicacion;
	private String publi_comentario;
	private LocalDate publi_fecha;
	private int publi_calificacion;
	private String publi_etiqueta;
	private String publi_tipo_usuario;
	private static Long total = Long.valueOf(0);
	private Usuario usuario;
	private Escuela escuela;
	private Carrera carrera;
	
	//constructor
	public Publicacion(String publi_comentario, LocalDate publi_fecha, int publi_calificacion, String publi_etiqueta,
			String publi_tipo_usuario, Usuario usuario, Escuela escuela, Carrera carrera) {
		super();
		this.publi_comentario = publi_comentario;
		this.publi_fecha = publi_fecha;
		this.publi_calificacion = publi_calificacion;
		this.publi_etiqueta = publi_etiqueta;
		this.publi_tipo_usuario = publi_tipo_usuario;
		this.usuario = usuario;
		this.escuela = escuela;
		this.carrera = carrera;
		Publicacion.total++;
		this.idpublicacion = Publicacion.total;
	}

	//getters and setters
	public String getPubli_comentario() {
		return publi_comentario;
	}
	public void setPubli_comentario(String publi_comentario) {
		this.publi_comentario = publi_comentario;
	}

	public LocalDate getPubli_fecha() {
		return publi_fecha;
	}

	public void setPubli_fecha(LocalDate publi_fecha) {
		this.publi_fecha = publi_fecha;
	}

	public int getPubli_calificacion() {
		return publi_calificacion;
	}

	public void setPubli_calificacion(int publi_calificacion) {
		this.publi_calificacion = publi_calificacion;
	}

	public String getPubli_etiqueta() {
		return publi_etiqueta;
	}

	public void setPubli_etiqueta(String publi_etiqueta) {
		this.publi_etiqueta = publi_etiqueta;
	}

	public String getPubli_tipo_usuario() {
		return publi_tipo_usuario;
	}

	public void setPubli_tipo_usuario(String publi_tipo_usuario) {
		this.publi_tipo_usuario = publi_tipo_usuario;
	}

	public Long getIdpublicacion() {
		return idpublicacion;
	}
	//llaves foraneas
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
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
		return "Publicacion [idpublicacion=" + idpublicacion + ", publi_comentario=" + publi_comentario
				+ ", publi_fecha=" + publi_fecha + ", publi_calificacion=" + publi_calificacion + ", publi_etiqueta="
				+ publi_etiqueta + ", publi_tipo_usuario=" + publi_tipo_usuario + ", usuario=" + usuario + ", escuela="
				+ escuela + ", carrera=" + carrera + "]";
	}
		

	
	
}
