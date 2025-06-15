package org.unireview;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.unireview.model.Carrera;
import org.unireview.model.Escuela;
import org.unireview.model.OfertaEducativa;
import org.unireview.repository.CarreraRepository;
import org.unireview.repository.EscuelaRepository;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status; //status 200 OK

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content; //obtener contenido
import static org.hamcrest.Matchers.containsString; //valida que haya una cadena de texto en el contenido

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.is;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;

@SpringBootTest
@AutoConfigureMockMvc
class UniReviewApplicationTests {
///////////////////////////////Test para usuarios//////////////////////////////////////////////
	private final String token = "Bearer: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXVscmFtaXJlei5nbGV6MDBAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDgyODkxMzksImV4cCI6MTc0ODM3NTUzOX0.JLoSZGt2nX2G_kkRSlFwnwzoa59FERsk8bIV5mppIAU";
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private CarreraRepository carreraRepository;
	@Autowired
	private EscuelaRepository escuelaRepository;
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para obetener al usuario con ID 1 y corroborar que su correo corresponde al guardado en BD")
	void pruebaGET()throws Exception {
		this.mockMvc.perform(get("/unireview/usuarios/").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		//.andExpect(jsonPath("$.usu_email", is("raulramirez.glez00@gmail.com")));
	}//prueba GET usuario
	
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para borrar el correo del usuario con el ID 2 almacenado en la BD")
	void pruebaDELETE()throws Exception {
		this.mockMvc.perform(delete("/unireview/usuarios/2").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect( content().string( containsString("kengut04@gmail.com") ) );
		//.andExpect(jsonPath("$.usu_email", is("raulramirez.glez00@gmail.com")));
	}//prueba DELETE usuario
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para editar propiedades del usuario con el ID 1")
	void pruebaPUT()throws Exception {
		this.mockMvc.perform(put("/unireview/usuarios/1?usu_nombre=Raul Ramirez Glez&usu_fechanacimiento=2001-12-31").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		//.andExpect(jsonPath("$.usu_email", is("raulramirez.glez00@gmail.com")));
	}//prueba PUT usuario
	
///////////////////////////////Test para publicaciones//////////////////////////////////////////////
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para obetener la publicacion con ID 2 y corroborar que su correo corresponde al guardado en BD")
	void pruebaGETPubli()throws Exception {
		this.mockMvc.perform(get("/unireview/publicaciones/2").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		//.andExpect(jsonPath("$.usu_email", is("raulramirez.glez00@gmail.com")));
	}//prueba GET publicacion
	

	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para borrar la publicacion con el ID 3 tomando como referencia el correo")
	void pruebaDELETEPubli()throws Exception {
		this.mockMvc.perform(delete("/unireview/publicaciones/3").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		//.andExpect(jsonPath("$.usu_email", is("raulramirez.glez00@gmail.com")));
	}//prueba DELETE publicacion
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para editar propiedades de la publicacion con el ID 2")
	void pruebaPUTPubli()throws Exception {
		this.mockMvc.perform(put("/unireview/publicaciones/2?publi_calificacion=5").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		//.andExpect(jsonPath("$.usu_email", is("raulramirez.glez00@gmail.com")));
	}//prueba PUT publicacion
	
///////////////////////////////Test para escuelas//////////////////////////////////////////////
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para obetener la escuela con ID 1 y corroborar que su nombre coicide")
	void pruebaGETEscuela()throws Exception {
		this.mockMvc.perform(get("/unireview/escuelas/1").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("Instituto Tecnológico de Reynosa") ) );
		.andExpect(jsonPath("$.esc_nombre", is("Instituto Tecnológico de Reynosa")));
	}//prueba GET escuela
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para borrar la escuela con el ID 246 en base al nombre")
	void pruebaDELETEEscuela()throws Exception {
		this.mockMvc.perform(delete("/unireview/escuelas/246").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		.andExpect(jsonPath("$.esc_nombre", is("Universidad Tecnológica de Tamaulipas Norte")));
	}//prueba DELETE escuela
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para editar propiedades de la escuela con el ID 1")
	void pruebaPUTEscuela()throws Exception {
		this.mockMvc.perform(put("/unireview/escuelas/1?esc_ubicacion=Tamaulipas").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("") ) );
		.andExpect(jsonPath("$.esc_nombre", is("Instituto Tecnológico de Reynosa")));
	}//prueba PUT escuela
	
	private static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}//catch
	}//asJsonString
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Se prueba el POST para egregar una nueva escuela")
	void pruebaPOST() throws Exception {
		Escuela esc = new Escuela("GenerationMX", "CDMX, México", "mexico.generation.org");
		this.mockMvc.perform(post("/unireview/escuelas/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(esc))
				.header("Authorization", token))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.esc_nombre", is("GenerationMX")));
	}//prueba POST producto
	
///////////////////////////////Test para carreras//////////////////////////////////////////////
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para obetener la carrera con ID 1 y corroborar que su nombre coincide")
	void pruebaGETCarrera()throws Exception {
		this.mockMvc.perform(get("/unireview/carreras/1").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("Instituto Tecnológico de Reynosa") ) );
		.andExpect(jsonPath("$.carr_nombre", is("Ing. Tecnologías de la Información y Comunicaciones")));
	}//prueba GET carrera
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para borrar la carrera con el ID 35 en base al nombre")
	void pruebaDELETECarrera()throws Exception {
		this.mockMvc.perform(delete("/unireview/carreras/35").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		.andExpect(jsonPath("$.carr_nombre", is("Médico Veterinariooooooooooooooooo")));
	}//prueba DELETE carrera
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para editar propiedades de la carrera con el ID 2")
	void pruebaPUTCarrera()throws Exception {
		this.mockMvc.perform(put("/unireview/carreras/2?carr_nombre=Ingeniería Telemática").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("") ) );
		.andExpect(jsonPath("$.carr_nombre", is("Ingeniería Telemática")));
	}//prueba PUT carrera
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Se prueba el POST para egregar una nueva escuela")
	void pruebaPOSTCarrera() throws Exception {
		Carrera carr = new Carrera("Lic. Física Nuclear", 0d);
		this.mockMvc.perform(post("/unireview/carreras/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(carr))
				.header("Authorization", token))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.carr_nombre", is("Lic. Física Nuclear")));
	}//prueba POST carrera
	
///////////////////////////////Test para ofertas educativa//////////////////////////////////////////////
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para obetener la oferta educativa con ID 1 y corroborar que su nombre coincide")
	void pruebaGETOferta()throws Exception {
		this.mockMvc.perform(get("/unireview/ofertas/1").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("Instituto Tecnológico de Reynosa") ) );
		.andExpect(jsonPath("$.escuela.esc_nombre", is("Escuela Superior de Educación Física")));
	}//prueba GET oferta educativa
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para borrar la oferta con el ID 6 en base al nombre")
	void pruebaDELETEOferta()throws Exception {
		this.mockMvc.perform(delete("/unireview/ofertas/6").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("raulramirez.glez00@gmail.com") ) );
		.andExpect(jsonPath("$.escuela.esc_nombre", is("Instituto Politécnico Nacional")));
	}//prueba DELETE oferta educativa
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Prueba para editar propiedades de la oferta educativa con el ID 1")
	void pruebaPUTOferta()throws Exception {
		this.mockMvc.perform(put("/unireview/ofertas/1?ofed_enlace=tecmilenio.mx/es/ingenieria-en-mecatronica").header("Authorization", token) ) 
		.andDo(print())
		.andExpect(status().isOk())
		//.andExpect( content().string( containsString("") ) );
		.andExpect(jsonPath("$.escuela.esc_nombre", is("Escuela Superior de Educación Física")));
	}//prueba PUT oferta Educativa
	
	@Test
	@Disabled("Probado una vez, deshabilitado para subsecuentes ocasiones")
	@DisplayName("Se prueba el POST para egregar una nueva oferta educativa")
	void pruebaPOSTOferta() throws Exception {
		Carrera carr = carreraRepository.save(new Carrera("Lic. Arte", 0d));
		Escuela esc = escuelaRepository.save(new Escuela("Generation", "CDMX, México", "mexico.generation.org"));
		OfertaEducativa ofed = new OfertaEducativa("https://www.iteso.mx", esc, carr);
		this.mockMvc.perform(post("/unireview/ofertas/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(ofed))
				.header("Authorization", token))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.carrera.carr_nombre", is("Lic. Arte")));
	}//prueba POST carrera
}
