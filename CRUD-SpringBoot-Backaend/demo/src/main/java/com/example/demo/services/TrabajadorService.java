package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.TrabajadorModel;
import com.example.demo.repositories.TrabajadorRepository;

@Service
public class TrabajadorService {
  @Autowired
  TrabajadorRepository trabajadorRepository;

  public ArrayList<TrabajadorModel> obtenerTrabajadores() {
    return (ArrayList<TrabajadorModel>) trabajadorRepository.findAll();
  }

  public TrabajadorModel guardarTrabajador(TrabajadorModel trabajador) {
    return trabajadorRepository.save(trabajador);
  }

  public Optional<TrabajadorModel> obtenerPorId(Long id) {
    return trabajadorRepository.findById(id);
  }

  public boolean eliminarTrabajador(Long id) {
    try {
      trabajadorRepository.deleteById(id);
      return true;
    } catch (Exception err) {
      return false;
    }
  }
}
