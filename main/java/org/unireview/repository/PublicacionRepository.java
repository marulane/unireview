package org.unireview.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.unireview.model.Escuela;
import org.unireview.model.Publicacion;

@Repository
public interface PublicacionRepository extends JpaRepository<Publicacion, Integer>{
	
	
	@Query("SELECT p FROM Publicacion p WHERE p.usuario.usu_email= :email")
	Optional<Escuela> findByUsuarioEmail(@Param("email") String email);
	
	@Query("SELECT p FROM Publicacion p WHERE p.usuario.usu_email= :email")
	Optional<Publicacion> deleteByUsuarioEmail(String email);

	//Optional<Publicacion> findByUsuarioEmail(String email);
	
	
}//class PublicacionRepository 
