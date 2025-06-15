package org.unireview.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.unireview.model.Carrera;

public interface CarreraRepository extends JpaRepository<Carrera, Integer>{

	@Query("SELECT c FROM Carrera c WHERE c.carr_nombre = :nombre")
	Optional<Carrera> findByCarrNombre(@Param("nombre") String nombre);
	
	
}//class CarreraRepository 
