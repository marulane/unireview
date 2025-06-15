package org.unireview.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idusuario", unique = true, nullable = false)
	private Integer idusuario;
	
	@Column(name="usu_nombre", nullable = false)
	private String usu_nombre;
	
	@Column(name="usu_email", unique = true, nullable = false)
	private String usu_email;
	
	@Column(name="usu_telefono", nullable = false)
	private String usu_telefono;
	
	@Column(name="usu_password", nullable = false)
	private String usu_password;
	
	@Column(name="usu_fechanacimiento", nullable = false)
	private LocalDate usu_fechaNacimiento;
	
	@Column(name="usu_foto_perfil")
	private String usu_foto_perfil;
	//private static Long total = Long.valueOf(0);
	
	
	// constructor
	public Usuario(String usu_nombre, String usu_email, String usu_telefono, String usu_password,
			LocalDate usu_fechaNacimiento, String usu_foto_perfil) {
		super();
		//Usuario.total++;
		this.usu_nombre = usu_nombre;
		this.usu_email = usu_email;
		this.usu_telefono = usu_telefono;
		this.usu_password = usu_password;
		this.usu_fechaNacimiento = usu_fechaNacimiento;
		this.usu_foto_perfil = usu_foto_perfil;
		//this.idusuario = Usuario.total;
		
	}
	
	//Constructor vacío
	public Usuario() {
		//Usuario.total++;
		//this.idusuario = Usuario.total;
	}
	
	
	// getters and setters
	public String getUsu_nombre() {
		return usu_nombre;
	}
	public void setUsu_nombre(String usu_nombre) {
		this.usu_nombre = usu_nombre;
	}
	public String getUsu_email() {
		return usu_email;
	}
	public void setUsu_email(String usu_email) {
		this.usu_email = usu_email;
	}
	public String getUsu_telefono() {
		return usu_telefono;
	}
	public void setUsu_telefono(String usu_telefono) {
		this.usu_telefono = usu_telefono;
	}
	public String getUsu_password() {
		return usu_password;
	}
	public void setUsu_password(String usu_password) {
		this.usu_password = usu_password;
	}
	public LocalDate getUsu_fechaNacimiento() {
		return usu_fechaNacimiento;
	}
	public void setUsu_fechaNacimiento(LocalDate usu_fechaNacimiento) {
		this.usu_fechaNacimiento = usu_fechaNacimiento;
	}
	public String getUsu_foto_perfil() {
		return usu_foto_perfil;
	}
	public void setUsu_foto_perfil(String usu_foto_perfil) {
		this.usu_foto_perfil = usu_foto_perfil;
	}
	public Integer getIdusuario() {
		return idusuario;
	}


	// to string
	@Override
	public String toString() {
		return "Usuario [idusuario=" + idusuario + ", usu_nombre=" + usu_nombre + ", usu_email=" + usu_email
				+ ", usu_telefono=" + usu_telefono + ", usu_password=" + usu_password + ", usu_fechaNacimiento="
				+ usu_fechaNacimiento + ", usu_foto_perfil=" + usu_foto_perfil + "]";
	}
	
	
	
}
