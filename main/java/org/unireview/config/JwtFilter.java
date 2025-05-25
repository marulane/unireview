package org.unireview.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;

public class JwtFilter extends GenericFilterBean {
	public static String secret = "UniReviewEsElMejorProyectoQueHaTenidoGeneration";

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, 
			FilterChain chain)throws IOException, ServletException {
		//solicitud
		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		//Header Authorization
		String authHeader = httpServletRequest.getHeader("Authorization");
		//Filtrar por método y URL
		//httpServletRequest.getMethod()-> GET POST PUT DELETE
		boolean isPublicGet =
				httpServletRequest.getMethod().equals("GET") &&
				(httpServletRequest.getRequestURI().contains("/unireview/publicaciones/") ||
				 httpServletRequest.getRequestURI().contains("/unireview/carreras/") ||
				 httpServletRequest.getRequestURI().contains("/unireview/escuelas/") ||
				 httpServletRequest.getRequestURI().contains("/unireview/ofertas/"));

			boolean isPublicPost =
				httpServletRequest.getMethod().equals("POST") &&
				httpServletRequest.getRequestURI().contains("/unireview/usuarios/");

			if (!(isPublicGet || isPublicPost)) {
				// Verificar el token
				if (authHeader == null || !authHeader.startsWith("Bearer: ")) {
					System.out.println("1. Invalid Token");
					throw new ServletException("1. Invalid Token");
				}
			String token = authHeader.substring(7);
			try {
				Claims claims = Jwts.parser().setSigningKey(secret)
					.parseClaimsJws(token).getBody();
				claims.forEach( (key,value)-> System.out.println("Key: " + key + 
						" value: " + value));
			} catch (SignatureException | MalformedJwtException | ExpiredJwtException e) {
				System.out.println("2. Invalid Token");
				throw new ServletException("2. Invalid Token");
			}//catch
		}//if getMethod
		chain.doFilter(request, response);
	}//doFilter
}
