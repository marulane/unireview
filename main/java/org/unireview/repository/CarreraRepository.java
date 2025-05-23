package org.unireview.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.unireview.model.Carrera;

public interface CarreraRepository extends JpaRepository<Carrera, Integer>{

	Optional<Carrera> findByName(String name);
	
}//class CarreraRepository 
