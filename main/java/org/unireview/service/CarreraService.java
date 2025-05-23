package org.unireview.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.unireview.model.Carrera;
import org.unireview.repository.CarreraRepository;
@Service
public class CarreraService {
	
	private final CarreraRepository carreraRepository;
//	private final List<Carrera> lista = new ArrayList<Carrera>();
	
	protected CarreraService(CarreraRepository carreraRepository) {
		this.carreraRepository = carreraRepository;
	}
	
//	public CarreraService() {
//		lista.add(new Carrera( "Ing. Tecnologías de la Información y Comunicaciones", 4d));
//		lista.add(new Carrera("Ing. Telemática", 3.5));
//		lista.add(new Carrera("Lic. Educación Física", 5d));
//		lista.add(new Carrera("Lic. Arquitectura", 2.2));
//		lista.add(new Carrera("Ing. Mecatrónica", 4.1));
//		lista.add(new Carrera("Comunicación y Periodismo", 3.7));
//	}

	public List<Carrera> getCarreras() {
		return carreraRepository.findAll();
	}//getCarreras

	public Carrera getCarrera(Integer id) {
		return carreraRepository.findById(id).orElseThrow(
				() -> new IllegalArgumentException("La carrera con el id [" + id + "] no existe.")
				);
	}//getCarrera

	public Carrera deleteCarrera(Integer id) {
		Carrera tmp = null;
	     if(carreraRepository.existsById(id)) {
	    	 tmp = carreraRepository.findById(id).get();
	    	 carreraRepository.deleteById(id);
	     }//if exist
        return tmp;
	}//deleteCarrera

	public Carrera addCarrera(Carrera carrera) {
		Optional<Carrera> prod =
				carreraRepository.findByName(carrera.getCarr_nombre());
				if(prod.isEmpty() ) {
					carreraRepository.save(carrera);

				} else {
					carrera=null; //prod.get();
				}
				return carrera;
	}//addCarrera

	public Carrera updateCarrera(Integer id, String carr_nombre) {
		Carrera carr = null;
		
		if(carreraRepository.existsById(id)) {
			Carrera carrera = carreraRepository.findById(id).get();
			if(carr_nombre!=null) carrera.setCarr_nombre(carr_nombre);;
	
			carreraRepository.save(carrera);
			carr = carrera;
		}
		
		return carr;
	}//UpdateCarrera

	

}//class CarreraService
