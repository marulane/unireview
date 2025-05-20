package org.unireview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.unireview.model.Usuario;
import org.unireview.service.UsuarioService;

@RestController
@RequestMapping(path = "/unireview/usuarios")
public class UsuarioController {
	private final UsuarioService usuarioService;

	@Autowired
	public UsuarioController(UsuarioService usuarioService) {
		super();
		this.usuarioService = usuarioService;
	}
	
	@GetMapping
	public List<Usuario> getUsuario(){
		return usuarioService.getUsuarios();
	}
	
	@GetMapping(path = "{userId}") 	//obtener un usuario
	public Usuario getUsuario(@PathVariable("userId") Long id) {
		return usuarioService.getUsuario(id);
	}
	
	@DeleteMapping(path = "{userId}")
	public Usuario deleteUsuario(@PathVariable("userId") Long id) {
		return usuarioService.deleteUsuario(id);
	}
	
	@PostMapping
	public Usuario addUsuario(@RequestBody Usuario usuario) {
		return usuarioService.addProduct(usuario);
	}
	
	@PutMapping(path="{userId}")
	public Usuario updateUsuario(@PathVariable("userId") Long id,
		@RequestParam(required = false) String usu_nombre, 
		@RequestParam(required = false) String usu_email, 
		@RequestParam(required = false) String usu_telefono,
		@RequestParam(required = false) String usu_password, 
		@RequestParam(required = false) String usu_fechaNacimiento, 
		@RequestParam(required = false) String usu_foto_perfil) {
		
		return usuarioService.updateUsuario(id, usu_nombre, usu_email, usu_telefono, usu_password, usu_fechaNacimiento, usu_foto_perfil);
		
	}
	
	
	
}
