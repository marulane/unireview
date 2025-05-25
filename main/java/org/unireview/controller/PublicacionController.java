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
import org.unireview.model.Carrera;
import org.unireview.model.Escuela;
import org.unireview.model.Publicacion;
import org.unireview.model.Usuario;
import org.unireview.service.PublicacionService;

@CrossOrigin(origins = "http://127.0.0.1:5501")
@RestController
@RequestMapping(path="/unireview/publicaciones/")
//http://localhost:8080/unireview/publicaciones
public class PublicacionController {

	private final PublicacionService publicacionService;

	@Autowired
	public PublicacionController(PublicacionService publicacionService) {
		this.publicacionService = publicacionService;
	}
	
	@GetMapping
	public List<Publicacion> getPublicaciones(){
		return publicacionService.getPublicaciones();
	}//getPublicaciones
	
	@GetMapping(path="filter/{emailId}")
	public List<Publicacion> getPublicacionesByEmail(@PathVariable("emailId") String email){
		return publicacionService.getPublicacionesByEmail(email);
	}
	@GetMapping(path="filter/publisDestacadas")
	public List<Publicacion> getFourPublis(){
		return publicacionService.selectFourCards();
	}//selectFourCards
	
	@GetMapping(path="{publiId}")
	public Publicacion getPublicacion(@PathVariable("publiId") Integer id) {
		return publicacionService.getPublicacion(id);
	}//getPublicacion
	
	@DeleteMapping(path = "{publiId}")
	public Publicacion deletePublicacion(@PathVariable("publiId") Integer id) {
		return publicacionService.deletePublicacion(id);
	}//deletePublicacion

	@PostMapping
	public Publicacion addPublicacion(@RequestBody Publicacion publicacion){
		return publicacionService.addPublicacion(publicacion);
	}//addPublicacion
	
	@PutMapping(path="{publiId}")
	public Publicacion updateProducto(@PathVariable("publiId") Integer id,
		@RequestParam(required = false) String publi_comentario,
		//@RequestParam(required = false) String publi_fecha,
		@RequestParam(required = false) Integer publi_calificacion,
		@RequestParam(required = false) String publi_etiqueta,
		@RequestParam(required = false) String publi_tipo_usuario,
		//@RequestParam(required = false) Usuario usuario,
		@RequestParam(required = false) Escuela escuela,
		@RequestParam(required = false) Carrera carrera
		) {
		return publicacionService.updatePublicacion(
				id, publi_comentario, publi_calificacion, 
				publi_etiqueta, publi_tipo_usuario, escuela, carrera);
	}//updatePublicacion
	
}
