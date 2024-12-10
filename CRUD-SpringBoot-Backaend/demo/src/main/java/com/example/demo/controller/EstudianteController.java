package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.EstudianteModel;
import com.example.demo.services.EstudianteService;

@RestController
@RequestMapping("/estudiante")
public class EstudianteController {
  @Autowired
  EstudianteService estudianteService;

  @GetMapping
  public List<EstudianteModel> obtenerEstudiantes() {
    return estudianteService.obtenerEstudiante();
  }

  @PostMapping
  public ResponseEntity<?> guardarEstudiante(@RequestBody EstudianteModel estudiante) {
    try {
      EstudianteModel nuevoEstudiante = estudianteService.guardarEstudiante(estudiante);
      return ResponseEntity.status(HttpStatus.CREATED).body(nuevoEstudiante);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al registrar un estudiante");
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<EstudianteModel> obtenerEstudiantePorId(@PathVariable Long id) {
    Optional<EstudianteModel> estudiante = estudianteService.obtenerPorId(id);
    return estudiante.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> eliminarEstudiantePorId(@PathVariable Long id) {
    boolean ok = estudianteService.eliminarEstudiante(id);
    if (ok) {
      return ResponseEntity.ok("Se eliminó el estudiante con id: " + id);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se pudo eliminar el estudiante con id: " + id);
    }
  }
}
