package org.unireview.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.unireview.model.Escuela;


public interface EscuelaRepository extends JpaRepository<Escuela, Integer>{

	Optional<Escuela> findByName(String name);

}//class EscuelaRepository
