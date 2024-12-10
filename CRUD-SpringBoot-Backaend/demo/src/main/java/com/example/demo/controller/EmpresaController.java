package com.example.demo.controller;

import com.example.demo.model.EmpresaModel;
import com.example.demo.services.EmpresaService;
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

@RestController
@RequestMapping("/empresa")
public class EmpresaController {
  @Autowired EmpresaService empresaService;

  @GetMapping
  public List<EmpresaModel> obtenerEmpresas() {
    return empresaService.obtenerEmpresas();
  }

  @PostMapping
  public ResponseEntity<?> guardarEmpresa(@RequestBody EmpresaModel empresa) {
    try {
      EmpresaModel nuevaEmpresa = empresaService.guardarEmpresa(empresa);
      return ResponseEntity.status(HttpStatus.CREATED).body(nuevaEmpresa);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)
          .body("Error al guardar la empresa: " + e.getMessage());
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<EmpresaModel>
  obtenerEmpresaPorId(@PathVariable Long id) {
    Optional<EmpresaModel> empresa = empresaService.obtenerPorId(id);
    return empresa.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> eliminarEmpresaPorId(@PathVariable Long id) {
    boolean ok = empresaService.eliminarEmpresa(id);
    if (ok) {
      return ResponseEntity.ok("Se eliminó la empresa con id: " + id);
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND)
          .body("No se pudo eliminar la empresa con id: " + id);
    }
  }
}
