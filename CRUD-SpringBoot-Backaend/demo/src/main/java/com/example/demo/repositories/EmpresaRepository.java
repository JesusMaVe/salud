package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.EmpresaModel;

@Repository
public interface EmpresaRepository extends CrudRepository<EmpresaModel, Long> {
}
