package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.EmpresaModel;
import com.example.demo.repositories.EmpresaRepository;


@Service
public class EmpresaService{
  @Autowired
  EmpresaRepository empresaRepository;

  public ArrayList<EmpresaModel> obtenerEmpresas(){
    return (ArrayList<EmpresaModel>) empresaRepository.findAll();
  }

  public EmpresaModel guardarEmpresa(EmpresaModel empresa){
    return empresaRepository.save(empresa);
  }

  public Optional<EmpresaModel> obtenerPorId(Long id){
    return empresaRepository.findById(id);
  }

  public boolean eliminarEmpresa(Long id){
    try{
      empresaRepository.deleteById(id);
      return true;
    }catch (Exception err){
      return false;
    }
  }
}
