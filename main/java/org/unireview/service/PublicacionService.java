package org.unireview.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unireview.model.Carrera;
import org.unireview.model.Escuela;
import org.unireview.model.Publicacion;
import org.unireview.repository.PublicacionRepository;

@Service
public class PublicacionService {
	
	PublicacionRepository publicacionRepository;
	
	@Autowired
	public PublicacionService(PublicacionRepository publicacionesRepository) {
		this.publicacionRepository = publicacionesRepository;
	}

	public List<Publicacion> getPublicaciones() {
		return publicacionRepository.findAll();
	}//getPublicaciones
	
	public List<Publicacion> getPublicacionesByEmail(String email) {
		return publicacionRepository.findByUsuarioEmail(email);
	}//getPublicaciones
	
	public List<Publicacion> selectFourCards() {
		return publicacionRepository.selectFourCards();
	}//getFourPublis

	public Publicacion getPublicacion(Integer id) {
		return publicacionRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("La publicación con el id[" + id + "] no existe."));
	}//getPublicacion

	public Publicacion deletePublicacion(Integer id) {
		Publicacion prod = null;
		if(publicacionRepository.existsById(id)) {
			prod = publicacionRepository.findById(id).get();
			publicacionRepository.deleteById(id);
		}//if exists
			return prod;
	}//deletePublicacion

	public Publicacion addPublicacion(Publicacion publicacion) {
		publicacionRepository.save(publicacion);
	    return publicacionRepository.findById(publicacion.getIdpublicacion()).orElse(null);
	}//addPublicacion


	public Publicacion updatePublicacion(Integer id, String publi_comentario, Integer publi_calificacion,
			String publi_etiqueta, String publi_tipo_usuario, Escuela escuela, Carrera carrera) {
		Publicacion temp = null;

		
			if (publicacionRepository.existsById(id)) {
				Publicacion publicacion = publicacionRepository.findById(id).get();
				if (publi_comentario != null) publicacion.setPubli_comentario(publi_comentario);
				//if (publi_fecha != null) temp.setPubli_fecha(publi_fecha);
				if (publi_calificacion != null && publi_calificacion >= 1 && publi_calificacion <= 5) {
					publicacion.setPubli_calificacion(publi_calificacion);
				}
				if (publi_etiqueta != null) publicacion.setPubli_etiqueta(publi_etiqueta);
				if (publi_tipo_usuario != null) publicacion.setPubli_tipo_usuario(publi_tipo_usuario);
				//if (usuario != null) publi.setUsuario(usuario);
				if (escuela != null) publicacion.setEscuela(escuela);
				if (carrera != null) publicacion.setCarrera(carrera);
				
				LocalDate nuevaFecha = LocalDate.now();
				
				publicacion.setPubli_fecha(nuevaFecha);
				
				publicacionRepository.save(publicacion);

				temp = publicacion;
		}
		return temp;
	}

}

