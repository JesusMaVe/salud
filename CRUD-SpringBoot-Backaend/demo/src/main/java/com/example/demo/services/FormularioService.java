package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FormularioModel;
import com.example.demo.repositories.FormularioRepository;

@Service
public class FormularioService {

  @Autowired
  FormularioRepository formularioRepository;

  public List<FormularioModel> obtenerFormulario() {
    try {
      return (List<FormularioModel>) formularioRepository.findAll();
    } catch (Exception e) {
      System.err.println("Error al obtener formularios: " + e.getMessage());
      return new ArrayList<>();
    }
  }

  public FormularioModel guardarFormulario(FormularioModel formulario) {
    try {
      return formularioRepository.save(formulario);
    } catch (Exception e) {
      System.err.println("Error al guardar formulario: " + e.getMessage());
      return null;     
    }
  }
}
