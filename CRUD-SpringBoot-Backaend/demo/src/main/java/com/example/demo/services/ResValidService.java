package com.example.demo.services;

import com.example.demo.model.ResValidModel;
import com.example.demo.repositories.ResValidRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResValidService {

  @Autowired private ResValidRepository resValidRepository;

  // Método para obtener todos los registros
  public List<ResValidModel> getAllResValid() {
    return resValidRepository.findAll();
  }

  // Método para obtener un registro por su ID
  public Optional<ResValidModel> getResValidById(String id) {
    return resValidRepository.findById(id);
  }

  // Método para guardar o actualizar un registro
  public ResValidModel saveResValid(ResValidModel resValidModel) {
    return resValidRepository.save(resValidModel);
  }

  // Método para eliminar un registro por su ID
  public void deleteResValid(String id) { resValidRepository.deleteById(id); }
}
