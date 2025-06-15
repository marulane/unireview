package org.unireview.dto;

public class ChangePassword {
	private String usu_password;
	private String n_usu_password;
	
	//constructor
	public ChangePassword(String usu_password, String n_usu_password) {
		super();
		this.usu_password = usu_password;
		this.n_usu_password = n_usu_password;
	}

	//constructor vacio
	public ChangePassword() {
		super();
	}

	//getters and setters
	public String getUsu_password() {
		return usu_password;
	}
	public void setUsu_password(String usu_password) {
		this.usu_password = usu_password;
	}

	public String getN_usu_password() {
		return n_usu_password;
	}
	public void setN_usu_password(String n_usu_password) {
		this.n_usu_password = n_usu_password;
	}

	//toString
	@Override
	public String toString() {
		return "ChangePassword [usu_password=" + usu_password + ", n_usu_password=" + n_usu_password + "]";
	}
	
	
	
	
	
	
}
