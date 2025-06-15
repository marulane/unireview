package org.unireview.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unireview.model.Escuela;
import org.unireview.model.OfertaEducativa;
import org.unireview.repository.EscuelaRepository;

@Service
public class EscuelaService {
//	private final List<Escuela> lista = new ArrayList<Escuela>();
	
	private final EscuelaRepository escuelaRepository;
	
//	public EscuelaService(){
//		lista.add(new Escuela( "Instituto Tecnológico de Reynosa", "Tamaulipas", "https://www.reynosa.tecnm.mx/"));
//		lista.add(new Escuela("Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional", "Ciudad de México", "https://www.cinvestav.mx/"));
//		lista.add(new Escuela("Universidad Nacional Autónoma de México", "Ciudad de México", "https://www.unam.mx/"));
//		lista.add(new Escuela("Instituto Tecnológico de Tláhuac", "Ciudad de México", "https://tlahuac2.tecnm.mx/"));
//		lista.add(new Escuela("Escuela Superior de Educación Física", "Ciudad de México", "https://www.aefcm.gob.mx/dgenam/ESEF/"));
//		lista.add(new Escuela("Enseñanza e Investigación Superior, A.C. (UNIVERSIDAD TECMILENIO)", "Jalisco", "https://www.tecmilenio.mx/es"));
//
//	}
	@Autowired
	public EscuelaService(EscuelaRepository escuelaRepository) {
		this.escuelaRepository = escuelaRepository;
	}//constructor

	
	
	//GET
	public List<Escuela> getEscuelas() {
		return escuelaRepository.findAll();
	}//getEscuelas

	//GET uno solo
	public Escuela getEscuela(Integer id) {
		return escuelaRepository.findById(id).orElseThrow(
				() -> new IllegalArgumentException("La escuela con el id [" + id + "] no existe")
				);
	}//getEscuela
	
	//DELETE
	public Escuela deleteEscuela(Integer id) {
		 Escuela tmp = null;
	     if(escuelaRepository.existsById(id)) {
	    	 tmp = escuelaRepository.findById(id).get();
	    	 escuelaRepository.deleteById(id);
	     }//if exist
        return tmp;
	}//deleteEscuela

	//POST
	public Escuela addEscuela(Escuela escuela) {
		Optional<Escuela> esc =
				escuelaRepository.findByEscNombre(escuela.getEsc_nombre());
				if(esc.isEmpty() ) {
					escuelaRepository.save(escuela);

				} else {
					escuela=null; //prod.get();
				}
				return escuela;
	}//addEscuela

	//PUT
	public Escuela updateEscuela(Integer id, String esc_nombre, String esc_ubicacion, String esc_enlace) {
		Escuela temp = null;
        if (escuelaRepository.existsById(id)) {
			Escuela escuela = escuelaRepository.findById(id).get();
			if (esc_nombre != null) escuela.setEsc_nombre(esc_nombre);		
			if (esc_ubicacion != null) escuela.setesc_ubicacion(esc_ubicacion);
			if (esc_enlace != null) escuela.setEsc_enlace(esc_enlace);
			
			escuelaRepository.save(escuela);
	
			temp = escuela;
        }
        return temp;
	}



}
