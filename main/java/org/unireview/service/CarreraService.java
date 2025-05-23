package org.unireview.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.unireview.model.Carrera;
@Service
public class CarreraService {
	
	private final List<Carrera> lista = new ArrayList<Carrera>();
	
	public CarreraService() {
		lista.add(new Carrera( "Ing. Tecnologías de la Información y Comunicaciones", 4d));
		lista.add(new Carrera("Ing. Telemática", 3.5));
		lista.add(new Carrera("Lic. Educación Física", 5d));
		lista.add(new Carrera("Lic. Arquitectura", 2.2));
		lista.add(new Carrera("Ing. Mecatrónica", 4.1));
		lista.add(new Carrera("Comunicación y Periodismo", 3.7));
	}

	public List<Carrera> getCarrera() {
		return lista;
	}//getCarrera

	public Carrera getCarreras(Integer id) {
		Carrera carrTemp = null;
		for (Carrera carrera : lista) {
			if(carrera.getIdcarrera()==id) {
				carrTemp = carrera;
				break;
			}
		}
		return carrTemp;
	}//getCarreras

	public Carrera deleteCarrera(Integer id) {
		Carrera carrTemp = null;
		for (Carrera carrera : lista) {
			if(carrera.getIdcarrera()==id) {
				carrTemp = carrera;
				lista.remove(carrera);
				break;
			}
		}
		return carrTemp;
	}//deleteCarrera

	public Carrera addCarrera(Carrera carrera) {
		lista.add(carrera);
		return carrera;
	}//addCarrera

	public Carrera updateCarrera(Integer id, String carr_nombre, Double carr_evaluacion_prom) {
		Carrera carrTemp = null;
		for(Carrera carrera : lista) {
			if(carrera.getIdcarrera()==id) {
				if(carr_nombre!=null) carrera.setCarr_nombre(carr_nombre);
				if(carr_evaluacion_prom!=null) carrera.setCarr_evaluacion_prom(carr_evaluacion_prom);
				
				carrTemp = carrera;
				break;
			}//if id
		}//foreach
		return carrTemp;
	}//UpdateCarrera

}//class CarreraService
