package org.unireview.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unireview.model.Carrera;
import org.unireview.model.Escuela;
import org.unireview.model.OfertaEducativa;
import org.unireview.model.Publicacion;
import org.unireview.repository.CarreraRepository;
import org.unireview.repository.EscuelaRepository;
import org.unireview.repository.OfertaEducativaRepository;

@Service
public class OfertaEducativaService {

//	private final List<OfertaEducativa> lista = new ArrayList<>();
//	private final List<Escuela> escuelas;
//	private final List<Carrera> carreras;

	private final OfertaEducativaRepository ofertaEducativaRepository;
	
	
	
//	public OfertaEducativaService(EscuelaService escuelaService, CarreraService carreraService) {
//		this.escuelas = new ArrayList<>(escuelaService.getEscuelas());
//		this.carreras = new ArrayList<>(carreraService.getCarrera());
//
//		// Ejemplos de ofertas educativas cargadas inicialmente
//		lista.add(new OfertaEducativa("https://tecmilenio.mx/es/ingenieria-en-mecatronica", escuelas.get(0), carreras.get(0)));
//		lista.add(new OfertaEducativa("https://www.upiita.ipn.mx/oferta-educativa/telematica", escuelas.get(2), carreras.get(2)));
//		lista.add(new OfertaEducativa("https://oferta.unam.mx/arquitectura.html", escuelas.get(1), carreras.get(3)));
//	}

	@Autowired
	public OfertaEducativaService(OfertaEducativaRepository ofertaEducativaRepository) {
		this.ofertaEducativaRepository = ofertaEducativaRepository;

	}//constructor
	
	public List<OfertaEducativa> getOfertas() {
		return ofertaEducativaRepository.findAll() ;
	}//getOfertas

	public OfertaEducativa getOferta(Integer id) {
		return ofertaEducativaRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("La carrera con el id[" + id + "] no existe."));
	}

	public OfertaEducativa addOferta(OfertaEducativa oferta) {
		ofertaEducativaRepository.save(oferta);
	    return ofertaEducativaRepository.findById(oferta.getIdoferta_educativa()).orElse(null);
	}

	public OfertaEducativa deleteOferta(Integer id) {
		OfertaEducativa temp = null;
		if(ofertaEducativaRepository.existsById(id)) {
			temp = ofertaEducativaRepository.findById(id).get();
			ofertaEducativaRepository.deleteById(id);
		}//if exists
			return temp;
	}

	public OfertaEducativa updateOferta(Integer id, String ofed_enlace, Escuela escuela, Carrera carrera) {
		OfertaEducativa temp = null;

		if (ofertaEducativaRepository.existsById(id)) {
			OfertaEducativa oferta = ofertaEducativaRepository.findById(id).get();
			if (ofed_enlace != null) oferta.setOfed_enlace(ofed_enlace);
			if (escuela != null) oferta.setEscuela(escuela);
			if (carrera != null) oferta.setCarrera(carrera);
			
			ofertaEducativaRepository.save(oferta);

			temp = oferta;
	}
	return temp;
	}


}
