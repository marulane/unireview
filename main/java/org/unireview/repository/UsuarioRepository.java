package org.unireview.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.unireview.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

	//@Query("SELECT u FROM Usuario u WHERE u.usu_nombre = :nombre")
	//Optional<Usuario> findByUsuName(String usu_email);
	@Query("SELECT u FROM Usuario u WHERE u.usu_email = :usu_email")
	Optional<Usuario> findByUsuEmail(@Param("usu_email") String usu_email);

	
}//class UsuarioRepository
