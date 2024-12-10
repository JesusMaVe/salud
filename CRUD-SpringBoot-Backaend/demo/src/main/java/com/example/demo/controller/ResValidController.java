package com.example.demo.controller;

import com.example.demo.model.ResValidModel;
import com.example.demo.services.ResValidService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/respuesta")
public class ResValidController {

  @Autowired private ResValidService resValidService;

  // Insertar múltiples registros desde un JSON
  @PostMapping("/batch")
  public ResponseEntity<List<ResValidModel>>
  createResValidBatch(@RequestBody List<ResValidRequest> request) {
    List<ResValidModel> savedRecords = new ArrayList<>();

    for (ResValidRequest resValidRequest : request) {
      ResValidModel resValid = new ResValidModel();
      resValid.setResvId(resValidRequest.getResvId());
      resValid.setResvEstatus(resValidRequest.getResvEstatus());
      resValid.setResvPuntaje(resValidRequest.getResvPuntaje());

      ResValidModel savedRecord = resValidService.saveResValid(resValid);
      savedRecords.add(savedRecord);
    }

    return ResponseEntity.ok(savedRecords);
  }

  // Clase interna para deserializar el formato de la solicitud
  public static class ResValidRequest {
    private String resvId;
    private String resvEstatus;
    private String resvPuntaje; // Cambiar de Integer a String

    public String getResvId() { return resvId; }

    public void setResvId(String resvId) { this.resvId = resvId; }

    public String getResvEstatus() { return resvEstatus; }

    public void setResvEstatus(String resvEstatus) {
      this.resvEstatus = resvEstatus;
    }

    public String getResvPuntaje() { return resvPuntaje; }

    public void setResvPuntaje(String resvPuntaje) {
      this.resvPuntaje = resvPuntaje;
    }
  }
}
