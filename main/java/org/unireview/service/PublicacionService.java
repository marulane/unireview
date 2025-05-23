package org.unireview.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unireview.model.Carrera;
import org.unireview.model.Escuela;
import org.unireview.model.Publicacion;
import org.unireview.model.Usuario;

@Service
public class PublicacionService {
	
	private final List<Publicacion> lista = new ArrayList<Publicacion>();
	
	private final List<Usuario> usuarios;
	private final List<Escuela> escuelas;
	private final List<Carrera> carreras;
	
	//Inyección de usuarios, carreras y escuelas provenientes de services
	@Autowired
	public PublicacionService(UsuarioService usuarioService, EscuelaService escuelaService, CarreraService carreraService) {
		
		this.usuarios = new ArrayList<>(usuarioService.getUsuarios());
	    this.escuelas = new ArrayList<>(escuelaService.getEscuelas());
	    this.carreras = new ArrayList<>(carreraService.getCarrera());
		

				lista.add(new Publicacion("La carrera puede resultar demandante, ya que abarca una amplia variedad de temas relacionados con las telecomunicaciones. Entre ellos se encuentran el estudio de señales AM y FM, antenas, conexión de redes y los distintos protocolos de Internet. Además, se incluyen asignaturas de programación, siempre orientadas al ámbito de las telecomunicaciones. Es importante mencionar que las matemáticas tienen un papel fundamental a lo largo de los cinco años de estudio, por lo que, si no existe afinidad por esta área, podría no ser la opción más adecuada. Asimismo, el conocimiento del idioma inglés representa una herramienta valiosa, ya que gran parte de los libros y referencias técnicas se encuentran en este idioma. Comprenderlo facilita el aprendizaje y la comprensión de los conceptos relacionados con las telecomunicaciones.", "2025-03-25", 4, "Retícula", "Egresada/o", usuarios.get(2), escuelas.get(2), carreras.get(2)));

				lista.add(new Publicacion("La carrera de arquitectura es muy buena, si te gusta la parte de las matemáticas, el diseño, los materiales, la creatividad y sobre todo un compromiso social. La arquitectura te da las herramientas para  crear espacios con un sentido de pertenencia y buscar las opciones más óptimas para hacerlo realidad.", "2025-03-03", 4, "Experiencia personal", "Estudiante", usuarios.get(4), escuelas.get(4), carreras.get(3)));

				lista.add(new Publicacion("La carrera es buena, pues a lo largo de mi formación, el temario fue concreto. La experiencia fue muy enriquecedora porque te enfocan a desarrollar diferentes habilidades, aplicar conocimientos en problemas planteados de casos reales.", "2025-02-22", 4, "Retícula", "Egresada/o", usuarios.get(5), escuelas.get(1), carreras.get(4)));

				lista.add(new Publicacion("La carrera es muy buena, y las instalaciones que proporciona la universidad para ello, en ocasiones, son malas. Algunas partes de los laboratorios son inservibles, nunca llegué a usarlos en los 4 años que estudié ahí. Algunos profesores eran muy buenos y se les notaba que les gustaba enseñar, unos otros solo estaban ahí por compromiso y en ocasiones pareciese que no sabían lo que explicaban. Sí, recomiendo la carrera, más no la universidad.", "2025-02-12", 5, "Retícula", "Egresada/o", usuarios.get(4), escuelas.get(5), carreras.get(5)));



	}

	public List<Publicacion> getPublicaciones() {
		return lista;
	}//getPublicaciones

	public Publicacion getPublicacion(Integer id) {
		Publicacion publiTemp = null;
		for(Publicacion publi : lista) {
			if(publi.getIdpublicacion()==id) {
				publiTemp=publi;
				break;
			}
		}
		return publiTemp;
	}//getPublicacion

	public Publicacion deletePublicacion(Integer id) {
		Publicacion publiTemp = null;
		for(Publicacion publi : lista) {
			if(publi.getIdpublicacion()==id) {
				publiTemp=publi;
				lista.remove(publi);
				break;
			}
		}
		return publiTemp;
	}//deletePublicacion

	public Publicacion addPublicacion(Publicacion publicacion) {
		lista.add(publicacion);
		return publicacion;
	}//addPublicacion


	public Publicacion updatePublicacion(Integer id, String publi_comentario, String publi_fecha, Integer publi_calificacion,
			String publi_etiqueta, String publi_tipo_usuario, Usuario usuario, Escuela escuela, Carrera carrera) {
		Publicacion publicacion = null;

		for (Publicacion publi : lista) {
			if (publi.getIdpublicacion() == id) {
				if (publi_comentario != null) publi.setPubli_comentario(publi_comentario);
				if (publi_fecha != null) publi.setPubli_fecha(publi_fecha);
				if (publi_calificacion != null && publi_calificacion >= 1 && publi_calificacion <= 5) {
				    publi.setPubli_calificacion(publi_calificacion);
				}
				if (publi_etiqueta != null) publi.setPubli_etiqueta(publi_etiqueta);
				if (publi_tipo_usuario != null) publi.setPubli_tipo_usuario(publi_tipo_usuario);
				if (usuario != null) publi.setUsuario(usuario);
				if (escuela != null) publi.setEscuela(escuela);
				if (carrera != null) publi.setCarrera(carrera);

				publicacion = publi;
				break;
			}
		}
		return publicacion;
	}
}

