package org.unireview.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.unireview.dto.ChangePassword;
import org.unireview.model.Usuario;
import org.unireview.repository.UsuarioRepository;

@Service
public class UsuarioService {
//	private final List<Usuario> lista = new ArrayList<Usuario>();
	
	@Autowired
	private PasswordEncoder encoder;
	
	private final UsuarioRepository usuarioRepository;
	
//	public UsuarioService() {
//		lista.add(new Usuario("Itzel", "correo1@gmail.com", "5521212121", "Itzel123", "1998, 1, 11", "img1.png"));
//		lista.add(new Usuario("Diego", "correo2@gmail.com", "5531313131", "Diego123", "1999, 2, 12", "img2.png"));
//		lista.add(new Usuario("Raul", "correo3@gmail.com", "5541414141", "Raul123", "2000, 3, 13", "img3.png"));
//		lista.add(new Usuario("Kenya", "correo4@gmail.com", "5551515151", "Kenya123", "2001, 4, 14", "img4.png"));
//		lista.add(new Usuario("Joshua", "correo5@gmail.com", "5561616161", "Joshua123", "2002, 5, 15", "img5.png"));
//		lista.add(new Usuario("Maria", "correo6@gmail.com", "5571717171", "Maria123", "2003, 6, 16", "img6.png"));
//		lista.add(new Usuario("Samantha", "correo7@gmail.com", "5581818181", "Samantha123", "2004, 7, 17", "img7.png"));
//	}

	@Autowired
	public UsuarioService(UsuarioRepository usuariorepository) {
		this.usuarioRepository = usuariorepository;
	}//constructor
	
	public List<Usuario> getUsuarios() {
		return usuarioRepository.findAll();
	}//getUsuarios

	public Usuario getUsuario(Integer id) {
		return usuarioRepository.findById(id).orElseThrow(
				() -> new IllegalArgumentException("El usuario con el id [" + id + "] no existe")
				);
	}//getUsuario

	public Usuario deleteUsuario(Integer id) {
		  Usuario tmp = null;
		     if(usuarioRepository.existsById(id)) {
		    	 tmp = usuarioRepository.findById(id).get();
		    	 usuarioRepository.deleteById(id);
		     }//if exist
	        return tmp;
	}//deleteUsuario

	public Usuario addUsuario(Usuario usuario) {
		//TEMPORAL HASTA UTILIZAR EL ENCODER
		Optional<Usuario> user = usuarioRepository.findByUsuEmail(usuario.getUsu_email());
		if(user.isEmpty()) {
			//usuario.setUsu_password(encoder.encode(usuario.getUsu_password()));
			usuario.setUsu_password(encoder.encode(usuario.getUsu_password()));
			usuarioRepository.save(usuario);
		}else {
			usuario = null;
			//user.get();	//regresa el producto que ya existe
			//producto=null; 	//tambien se puede utilizar este
		}
		return usuario;
	}//addUsuario

	public Usuario updateUsuario(Integer id, String usu_nombre, String usu_telefono, LocalDate usu_fechanacimiento,
			String usu_foto_perfil, ChangePassword changePassword) {
		Usuario tmp = null;
		if(usuarioRepository.existsById(id)){
			Usuario usuario = usuarioRepository.findById(id).get();
			if(usu_nombre != null) usuario.setUsu_nombre(usu_nombre);
			if(usu_telefono != null) usuario.setUsu_telefono(usu_telefono);
			if(usu_fechanacimiento != null) usuario.setUsu_fechaNacimiento(usu_fechanacimiento);
			if(usu_foto_perfil != null) usuario.setUsu_foto_perfil(usu_foto_perfil);
			if(usuario.getUsu_password().equals(changePassword.getUsu_password())) usuario.setUsu_password(changePassword.getN_usu_password());
			usuarioRepository.save(usuario);
			tmp = usuario;
		}
		return tmp;
	}//UpdateUsuario
	
	public boolean validateUser(Usuario usuario) {
		Optional<Usuario> user = usuarioRepository.findByUsuEmail(usuario.getUsu_email());
		if(user.isPresent()) {
			Usuario tmp = user.get();
			if(encoder.matches(usuario.getUsu_password(), tmp.getUsu_password())) {
				return true;
			}//matches
		}//if isPresent
		return false;
	}//ValidateUser




}//class
