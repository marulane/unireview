package org.unireview.model;

import java.time.LocalDate;

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
@Table(name = "publicacion")
public class Publicacion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idpublicacion", unique = true, nullable = false)
	private Integer idpublicacion;
	
	@Column(name="publi_comentario", nullable = false)
	private String publi_comentario;
	
	@Column(name="publi_fecha", nullable = false)
	private LocalDate publi_fecha;
	
	@Column(name="publi_calificacion", nullable = false)
	private Integer publi_calificacion;
	
	@Column(name="publi_etiqueta")
	private String publi_etiqueta;
	
	@Column(name="publi_tipo_usuario", nullable = false)
	private String publi_tipo_usuario;
	
	//private static Long total = Long.valueOf(0);
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "idusuario_fk", referencedColumnName = "idusuario")
	@JsonIgnoreProperties ({"hibernateLazyInitializer", "handler"})
	private Usuario usuario;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "idescuela_fk", referencedColumnName = "idescuela")
	@JsonIgnoreProperties ({"hibernateLazyInitializer", "handler"})
	private Escuela escuela;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "idcarrera_fk", referencedColumnName = "idcarrera")
	@JsonIgnoreProperties ({"hibernateLazyInitializer", "handler"})
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
		//Publicacion.total++;
		//this.idpublicacion = Publicacion.total;
	}
	
	//Constructor vacío
	public Publicacion() {
		//Publicacion.total++;
		//this.idpublicacion= Publicacion.total;
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

	public Integer getPubli_calificacion() {
		return publi_calificacion;
	}

	public void setPubli_calificacion(Integer publi_calificacion) {
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

	public Integer getIdpublicacion() {
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


