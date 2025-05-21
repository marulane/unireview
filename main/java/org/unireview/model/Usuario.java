package org.unireview.model;


public class Usuario {
	private Long idusuario;
	private String usu_nombre;
	private String usu_email;
	private String usu_telefono;
	private String usu_password;
	private String usu_fechaNacimiento;
	private String usu_foto_perfil;
	private static Long total = Long.valueOf(0);
	
	
	// constructor
	public Usuario(String usu_nombre, String usu_email, String usu_telefono, String usu_password,
			String usu_fechaNacimiento, String usu_foto_perfil) {
		super();
		Usuario.total++;
		this.usu_nombre = usu_nombre;
		this.usu_email = usu_email;
		this.usu_telefono = usu_telefono;
		this.usu_password = usu_password;
		this.usu_fechaNacimiento = usu_fechaNacimiento;
		this.usu_foto_perfil = usu_foto_perfil;
		this.idusuario = Usuario.total;
		
	}
	
	//Constructor vacío
	public Usuario() {
		Usuario.total++;
		this.idusuario = Usuario.total;
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
	public String getUsu_fechaNacimiento() {
		return usu_fechaNacimiento;
	}
	public void setUsu_fechaNacimiento(String usu_fechaNacimiento) {
		this.usu_fechaNacimiento = usu_fechaNacimiento;
	}
	public String getUsu_foto_perfil() {
		return usu_foto_perfil;
	}
	public void setUsu_foto_perfil(String usu_foto_perfil) {
		this.usu_foto_perfil = usu_foto_perfil;
	}
	public Long getIdusuario() {
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
