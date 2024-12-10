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

import com.example.demo.model.TrabajadorModel;
import com.example.demo.services.TrabajadorService;

@RestController
@RequestMapping("/trabajador")
public class TrabajadorController {
  @Autowired
  TrabajadorService trabajadorService;

  @GetMapping
  public List<TrabajadorModel> obtenerTrabajadores() {
    return trabajadorService.obtenerTrabajadores();
  }

  @PostMapping
  public ResponseEntity<?> guardarTrabajador(@RequestBody TrabajadorModel trabajador) {
    try {
      TrabajadorModel nuevoTrabajador = trabajadorService.guardarTrabajador(trabajador);
      return ResponseEntity.status(HttpStatus.CREATED).body(nuevoTrabajador);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al registrar un trabajador");
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<TrabajadorModel> obtenerTrabajadorPorId(@PathVariable Long id) {
    Optional<TrabajadorModel> trabajador = trabajadorService.obtenerPorId(id);
    return trabajador.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> eliminarTrabajadorPorId(@PathVariable Long id) {
    boolean ok = trabajadorService.eliminarTrabajador(id);
    if (ok) {
      return ResponseEntity.ok("Se eliminó el trabajador con id: " + id);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se pudo eliminar el trabajador con id: " + id);
    }
  }
}
