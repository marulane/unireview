package org.unireview.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.unireview.model.Carrera;
import org.unireview.model.Escuela;
import org.unireview.model.OfertaEducativa;
import org.unireview.service.OfertaEducativaService;

@RestController
@RequestMapping(path = "/unireview/ofertas/") // http://localhost:8080/unireview/ofertas/
public class OfertaEducativaController {

	private final OfertaEducativaService ofertaEducativaService;

	@Autowired
	public OfertaEducativaController(OfertaEducativaService ofertaEducativaService) {
		this.ofertaEducativaService = ofertaEducativaService;
	}

	
	@GetMapping
	public List<OfertaEducativa> getOfertas() {
		return ofertaEducativaService.getOfertas();
	}

	
	@GetMapping(path = "{ofertaId}")
	public OfertaEducativa getOferta(@PathVariable("ofertaId") Integer id) {
		return ofertaEducativaService.getOferta(id);
	}

	
	@PostMapping
	public OfertaEducativa addOferta(@RequestBody OfertaEducativa oferta) {
		return ofertaEducativaService.addOferta(oferta);
	}

	
	@DeleteMapping(path = "{ofertaId}")
	public OfertaEducativa deleteOferta(@PathVariable("ofertaId") Integer id) {
		return ofertaEducativaService.deleteOferta(id);
	}

	
	@PutMapping(path = "{ofertaId}")
	public OfertaEducativa updateOferta(
		@PathVariable("ofertaId") Integer id,
		@RequestParam(required = false) String ofed_enlace,
		@RequestParam(required = false) Escuela escuela,
		@RequestParam(required = false) Carrera carrera
	) {
		return ofertaEducativaService.updateOferta(id, ofed_enlace, escuela, carrera);
	}
}

