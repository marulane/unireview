package org.unireview.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.unireview.dto.ChangePassword;
import org.unireview.model.Usuario;
import org.unireview.service.UsuarioService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/unireview/usuarios/")
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
	public Usuario getUsuario(@PathVariable("userId") Integer id) {
		return usuarioService.getUsuario(id);
	}
	
	@DeleteMapping(path = "{userId}")
	public Usuario deleteUsuario(@PathVariable("userId") Integer id) {
		return usuarioService.deleteUsuario(id);
	}
	
	@PostMapping
	public Usuario addUsuario(@RequestBody Usuario usuario) {
		return usuarioService.addUsuario(usuario);
	}
	
	//Solo cambiamos el nombre, telefono, fecha de nacimiento, foto de perfil y contraseña
	@PutMapping(path="{userId}")
	public Usuario updateUsuario(@PathVariable("userId") Integer id,
		@RequestParam(required = false) String usu_nombre,  
		@RequestParam(required = false) String usu_telefono, 
		@RequestParam(required = false)  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate usu_fechanacimiento, 
		@RequestParam(required = false) String usu_foto_perfil, ChangePassword changePassword){
		
		return usuarioService.updateUsuario(id, usu_nombre, usu_telefono, usu_fechanacimiento, usu_foto_perfil, changePassword);
		
		
	}
	

	
	
	
}
