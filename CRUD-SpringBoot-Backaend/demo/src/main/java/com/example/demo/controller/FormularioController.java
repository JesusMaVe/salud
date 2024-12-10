package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.FormularioModel;
import com.example.demo.services.FormularioService;

@RestController
@RequestMapping("/formulario")
public class FormularioController {
  @Autowired
  FormularioService formularioService;

  @GetMapping
  public ResponseEntity<?> obtenerFormularios() {
    List<FormularioModel> formularios = formularioService.obtenerFormulario();
    if (formularios.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontraron formularios.");
    }
    return ResponseEntity.ok(formularios);
  }

  @PostMapping
  public ResponseEntity<?> guardarFormulario(@RequestBody FormularioModel formulario) {
    FormularioModel nuevoFormulario = formularioService.guardarFormulario(formulario);
    if (nuevoFormulario == null) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar el formulario.");
    }
    return ResponseEntity.status(HttpStatus.CREATED).body(nuevoFormulario);
  }
}
