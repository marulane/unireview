package org.unireview.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unireview.model.Escuela;

@Service
public class EscuelaService {
	private final List<Escuela> lista = new ArrayList<Escuela>();
	
	@Autowired
	public EscuelaService(){
		lista.add(new Escuela( "Instituto Tecnológico de Reynosa", "Tamaulipas", "https://www.reynosa.tecnm.mx/"));
		lista.add(new Escuela("Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional", "Ciudad de México", "https://www.cinvestav.mx/"));
		lista.add(new Escuela("Universidad Nacional Autónoma de México", "Ciudad de México", "https://www.unam.mx/"));
		lista.add(new Escuela("Instituto Tecnológico de Tláhuac", "Ciudad de México", "https://tlahuac2.tecnm.mx/"));
		lista.add(new Escuela("Escuela Superior de Educación Física", "Ciudad de México", "https://www.aefcm.gob.mx/dgenam/ESEF/"));
		lista.add(new Escuela("Enseñanza e Investigación Superior, A.C. (UNIVERSIDAD TECMILENIO)", "Jalisco", "https://www.tecmilenio.mx/es"));

	}
	
	//GET
	public List<Escuela> getEscuelas() {
		return lista;
	}

	//GET uno solo
	public Escuela getEscuela(Integer id) {
		Escuela escuelaTemp = null;
		for (Escuela esc : lista) {
			if(esc.getIdescuela()==id) {
				escuelaTemp= esc;
				break;
			}
		}
		return escuelaTemp;
	}
	
	//DELETE
	public Escuela deleteEscuela(Integer id) {
		Escuela escuelaTemp = null;
		for (Escuela escuela : lista) {
			if(escuela.getIdescuela()==id) {
				escuelaTemp= escuela;
				lista.remove(escuela);
				break;
			}
		}
		return escuelaTemp;
	}

	//POST
	public Escuela addEscuela(Escuela escuela) {
		lista.add(escuela);
		return escuela;
	}

	//PUT
	public Escuela updateEscuela(Integer id, String esc_nombre, String esc_ubicacion, String esc_enlace) {
		Escuela escTemp = null;
		for(Escuela escuela : lista) {
			if(escuela.getIdescuela()==id) {
				if(esc_nombre!=null) escuela.setEsc_nombre(esc_nombre);
				if(esc_ubicacion!=null) escuela.setesc_ubicacion(esc_ubicacion);
				if(esc_enlace!=null) escuela.setEsc_enlace(esc_enlace);
				
				escTemp = escuela;
				break;
			}//if id
		}//foreach
		return escTemp;
	}


}
