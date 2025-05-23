package org.unireview.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.unireview.model.OfertaEducativa;


public interface OfertaEducativaRepository extends JpaRepository<OfertaEducativa, Integer>{

	Optional<OfertaEducativa> findById(Integer id);
	
}//class OfertaEducativaRepository 
