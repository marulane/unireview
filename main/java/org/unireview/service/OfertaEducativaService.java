package org.unireview.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unireview.model.Carrera;
import org.unireview.model.Escuela;
import org.unireview.model.OfertaEducativa;

@Service
public class OfertaEducativaService {

	private final List<OfertaEducativa> lista = new ArrayList<>();

	private final List<Escuela> escuelas;
	private final List<Carrera> carreras;

	@Autowired
	public OfertaEducativaService(EscuelaService escuelaService, CarreraService carreraService) {
		this.escuelas = new ArrayList<>(escuelaService.getEscuelas());
		this.carreras = new ArrayList<>(carreraService.getCarrera());

		// Ejemplos de ofertas educativas cargadas inicialmente
		lista.add(new OfertaEducativa("https://tecmilenio.mx/es/ingenieria-en-mecatronica", escuelas.get(0), carreras.get(0)));
		lista.add(new OfertaEducativa("https://www.upiita.ipn.mx/oferta-educativa/telematica", escuelas.get(2), carreras.get(2)));
		lista.add(new OfertaEducativa("https://oferta.unam.mx/arquitectura.html", escuelas.get(1), carreras.get(3)));
	}

	public List<OfertaEducativa> getOfertas() {
		return lista;
	}

	public OfertaEducativa getOferta(Long id) {
		for (OfertaEducativa oferta : lista) {
			if (oferta.getIdoferta_educativa().equals(id)) {
				return oferta;
			}
		}
		return null;
	}

	public OfertaEducativa addOferta(OfertaEducativa oferta) {
		lista.add(oferta);
		return oferta;
	}

	public OfertaEducativa deleteOferta(Long id) {
		OfertaEducativa ofertaAEliminar = getOferta(id);
		if (ofertaAEliminar != null) {
			lista.remove(ofertaAEliminar);
		}
		return ofertaAEliminar;
	}

	public OfertaEducativa updateOferta(Long id, String ofed_enlace, Escuela escuela, Carrera carrera) {
		OfertaEducativa ofertaTemp = null;
		for(OfertaEducativa oferta : lista) {
			if (oferta.getIdoferta_educativa() == id) {
				if (ofed_enlace != null) oferta.setOfed_enlace(ofed_enlace);
				if (escuela != null) oferta.setEscuela(escuela);
				if (carrera != null) oferta.setCarrera(carrera);
				
				ofertaTemp=oferta;
				break;
			}//if=id
		}//for lista
		return ofertaTemp;
	}
}
