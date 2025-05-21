package org.unireview.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unireview.model.Usuario;

@Service
public class UsuarioService {
	private final List<Usuario> lista = new ArrayList<Usuario>();
	
	@Autowired
	public UsuarioService() {
		lista.add(new Usuario("Itzel", "correo1@gmail.com", "5521212121", "Itzel123", "1998, 1, 11", "img1.png"));
		lista.add(new Usuario("Diego", "correo2@gmail.com", "5531313131", "Diego123", "1999, 2, 12", "img2.png"));
		lista.add(new Usuario("Raul", "correo3@gmail.com", "5541414141", "Raul123", "2000, 3, 13", "img3.png"));
		lista.add(new Usuario("Kenya", "correo4@gmail.com", "5551515151", "Kenya123", "2001, 4, 14", "img4.png"));
		lista.add(new Usuario("Joshua", "correo5@gmail.com", "5561616161", "Joshua123", "2002, 5, 15", "img5.png"));
		lista.add(new Usuario("Maria", "correo6@gmail.com", "5571717171", "Maria123", "2003, 6, 16", "img6.png"));
		lista.add(new Usuario("Samantha", "correo7@gmail.com", "5581818181", "Samantha123", "2004, 7, 17", "img7.png"));
	}

	public List<Usuario> getUsuarios() {
		return lista;
	}

	public Usuario getUsuario(Long id) {
		Usuario usuarioTemp = null;
		for (Usuario usu : lista) {
			if(usu.getIdusuario()==id) {
				usuarioTemp= usu;
				break;
			}
		}
		return usuarioTemp;
	}

	public Usuario deleteUsuario(Long id) {
		Usuario usuarioTemp = null;
		for (Usuario usuario : lista) {
			if(usuario.getIdusuario()==id) {
				usuarioTemp= usuario;
				lista.remove(usuario);
				break;
			}
		}
		return usuarioTemp;
	}

	public Usuario addUsuario(Usuario usuario) {
		lista.add(usuario);
		return usuario;
	}

	public Usuario updateUsuario(Long id, String usu_nombre, String usu_email, String usu_telefono, String usu_password,
			String usu_fechaNacimiento, String usu_foto_perfil) {
		Usuario usuarioTemp = null;
		for (Usuario usuario : lista) {
			if(usuario.getIdusuario()==id) {
				if(usu_nombre!=null) usuario.setUsu_nombre(usu_nombre);
				if(usu_email!=null) usuario.setUsu_email(usu_email);
				if(usu_telefono!=null) usuario.setUsu_telefono(usu_telefono);
				if(usu_password!=null) usuario.setUsu_password(usu_password);
				if(usu_fechaNacimiento!=null) usuario.setUsu_fechaNacimiento(usu_fechaNacimiento);
				if(usu_foto_perfil!=null) usuario.setUsu_foto_perfil(usu_foto_perfil);
				
				usuarioTemp= usuario;
				break;
			}
		}
		return usuarioTemp;
	}

}
