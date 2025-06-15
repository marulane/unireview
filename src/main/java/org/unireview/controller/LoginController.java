package org.unireview.controller;

import java.util.Calendar;
import java.util.Date;

import javax.servlet.ServletException;

import org.unireview.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.unireview.config.JwtFilter;
import org.unireview.dto.TokenUsuario;
import org.unireview.service.UsuarioService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/unireview/login/")
public class LoginController {
	
	private final UsuarioService usuarioService;

	
	@Autowired
	public LoginController(UsuarioService usuarioService) {
		super();
		this.usuarioService = usuarioService;
	}
	
	@PostMapping
	public TokenUsuario loginUser(@RequestBody Usuario usuario) throws ServletException {
		if(usuarioService.validateUser(usuario)) {
			return new TokenUsuario(
						generateToken(usuario.getUsu_email()),
						usuarioService.getUsuarioByLoginUser(usuario)
						);
		}//if validateUser
		throw new ServletException("Nombre de usuario o contraseña incorrectos ["
				+ usuario.getUsu_email() + "]");
	}//loginUser
	
	private String generateToken(String email) {
		Calendar calendar = Calendar.getInstance(); // Fecha y hora del día de hoy
		//calendar.add(Calendar.MINUTE, 30);   // Dato más real
		calendar.add(Calendar.HOUR, 24); // Para pruebas
		
		//similar al then en js
		return Jwts.builder().setSubject(email).claim("role", "user")
				.setIssuedAt(new Date())
				.setExpiration(calendar.getTime())
				.signWith(SignatureAlgorithm.HS256, JwtFilter.secret)
				.compact();
	}//generateToken
	

}
