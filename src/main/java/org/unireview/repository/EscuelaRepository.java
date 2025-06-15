package org.unireview.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.unireview.model.Carrera;
import org.unireview.model.Escuela;


public interface EscuelaRepository extends JpaRepository<Escuela, Integer>{

	@Query("SELECT e FROM Escuela e WHERE e.esc_nombre = :nombre")
	Optional<Escuela> findByEscNombre(@Param("nombre") String nombre);
	
	//Optional<Escuela> findByEscNombre(String name);

}//class EscuelaRepository
