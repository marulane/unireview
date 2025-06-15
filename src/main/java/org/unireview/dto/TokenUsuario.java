package org.unireview.dto;

import org.unireview.model.Usuario;

public class TokenUsuario {
	private final String accessToken;
	private final Usuario user;

	//constructor
	public TokenUsuario(String accessToken, Usuario user) {
		super();
		this.user = user;
		this.accessToken = accessToken;
	}

	//getter
	public String getAccessToken() {
		return accessToken;
	}
	//getter
	public Usuario getUsuario() {
		return user;
	}
	
}
