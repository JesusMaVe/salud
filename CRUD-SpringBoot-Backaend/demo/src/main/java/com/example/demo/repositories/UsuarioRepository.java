package com.example.demo.repositories;

import com.example.demo.model.UsuarioModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long> {
  public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);

  //no me salio pero para hacer un query mas complicado es asi:
  //@Query("SELECT u FROM UsuarioModel u WHERE u.salary > ?1 AND u.prioridad = ?2")
  //ArrayList<UsuarioModel> findBySalaryGreaterThanAndPrioridad(Double salary, Integer prioridad);    
}
