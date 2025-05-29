package org.unireview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.unireview.model.Escuela;
import org.unireview.service.EscuelaService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/unireview/escuelas/")
public class EscuelaController {
	private final EscuelaService escuelaService;
	
	@Autowired
	public EscuelaController(EscuelaService escuelaService) {
		super();
		this.escuelaService = escuelaService;
	}
	
	@GetMapping
	public List<Escuela> getEscuela(){
		return escuelaService.getEscuelas();
	}
	
	@GetMapping(path = "{escuelaId}")
	public Escuela getEscuela(@PathVariable("escuelaId") Integer id) {
		return escuelaService.getEscuela(id);
	}
	
	@DeleteMapping(path = "{escuelaId}")
	public Escuela deleteEscuela(@PathVariable("escuelaId") Integer id) {
		return escuelaService.deleteEscuela(id);
	}
	
	@PostMapping
	public Escuela addEscuela(@RequestBody Escuela escuela) {
		return escuelaService.addEscuela(escuela);
	}
	
	@PutMapping(path = "{escuelaId}")
	public Escuela updateEscuela(@PathVariable("escuelaId") Integer id,
			@RequestParam(required = false) String esc_nombre,
			@RequestParam(required = false) String esc_ubicacion,
			@RequestParam(required = false) String esc_enlace) {
		
		return escuelaService.updateEscuela(id, esc_nombre, esc_ubicacion, esc_enlace);
	}
	

}