package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "res_valid")
public class ResValidModel {

  @Id @Column(name = "resv_id") private String resvId;

  @Column(name = "resv_estatus") private String resvEstatus;

  @Column(name = "resv_puntaje") private String resvPuntaje;

  // Constructor vacío
  public ResValidModel() {}

  // Getters y Setters
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
