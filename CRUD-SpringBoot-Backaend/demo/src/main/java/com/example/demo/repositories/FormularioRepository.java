package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.FormularioModel;

public interface FormularioRepository extends CrudRepository<FormularioModel, Long> {
}
