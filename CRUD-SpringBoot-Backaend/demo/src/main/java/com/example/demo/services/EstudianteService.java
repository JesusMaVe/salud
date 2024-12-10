package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.EstudianteModel;
import com.example.demo.repositories.EstudianteRepository;

@Service
public class EstudianteService {
  @Autowired
  EstudianteRepository estudianteRepository;

  public List<EstudianteModel> obtenerEstudiante() {
    return (List<EstudianteModel>) estudianteRepository.findAll();
  }

  public EstudianteModel guardarEstudiante(EstudianteModel estudiante) {
    if (estudianteRepository.existsById(estudiante.getId())) {
      throw new IllegalArgumentException("El ID ya está en uso.");
    }
    return estudianteRepository.save(estudiante);
  }

  public Optional<EstudianteModel> obtenerPorId(Long id) {
    return estudianteRepository.findById(id);
  }

  public boolean eliminarEstudiante(Long id) {
    try {
      estudianteRepository.deleteById(id);
      return true;
    } catch (Exception err) {
      return false;
    }
  }
}
