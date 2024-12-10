package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.EstudianteModel;

@Repository
public interface EstudianteRepository extends CrudRepository<EstudianteModel, Long> {

}
