package org.unireview.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.unireview.model.Publicacion;

@Repository
public interface PublicacionRepository extends JpaRepository<Publicacion, Integer>{

	Optional<Publicacion> findByEmail(String email);
	Optional<Publicacion> deleteByEmail(String email);
	
}//class PublicacionRepository 
