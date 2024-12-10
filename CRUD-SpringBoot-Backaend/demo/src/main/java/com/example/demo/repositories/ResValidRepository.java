package com.example.demo.repositories;

import com.example.demo.model.ResValidModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResValidRepository
    extends JpaRepository<ResValidModel, String> {}
