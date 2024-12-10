package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TrabajadorModel;

@Repository
public interface TrabajadorRepository extends CrudRepository<TrabajadorModel, Long> {
}
