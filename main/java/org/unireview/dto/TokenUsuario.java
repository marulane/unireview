package org.unireview.dto;

public class TokenUsuario {
	private final String accessToken;

	//constructor
	public TokenUsuario(String accessToken) {
		super();
		this.accessToken = accessToken;
	}

	//getter
	public String getAccessToken() {
		return accessToken;
	}
	
	
	
}
