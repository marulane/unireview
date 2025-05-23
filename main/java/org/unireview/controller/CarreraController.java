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
import org.unireview.model.Carrera;
import org.unireview.service.CarreraService;

@RestController
@RequestMapping(path="/unireview/carreras")
public class CarreraController {
	
	private final CarreraService carreraService;

	@Autowired
	public CarreraController(CarreraService carreraService) {
		this.carreraService = carreraService;
	}
	
	@GetMapping
	public List<Carrera> getCarreras(){
		return carreraService.getCarreras();
	}//getCarrera
	
	@GetMapping(path="{careerId}")
	public Carrera getCarrera(@PathVariable("careerId") Integer id){
		return carreraService.getCarrera(id);
	}//getCarreras
	
	@DeleteMapping(path="{careerId}")
	public Carrera deleteCarrera(@PathVariable("careerId") Integer id){
		return carreraService.deleteCarrera(id);
	}//DeleteCarrera
	
	@PostMapping
	public Carrera addCarrera(@RequestBody Carrera carrera){
		return carreraService.addCarrera(carrera);
	}//AddCarrera
	
	@PutMapping(path="{careerId}")
	public Carrera updateCarrera(@PathVariable("careerId") Integer id,
			@RequestParam(required = false) String carr_nombre){
			return carreraService.updateCarrera(id, carr_nombre);
	}//UpdateCarrera
}
