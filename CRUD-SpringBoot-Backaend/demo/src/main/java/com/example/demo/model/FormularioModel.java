package com.example.demo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "formulario")
public class FormularioModel {

  @Id @Column(name = "folio") private Long folio; // Clave primaria

  @Column(name = "fecha")
  @Temporal(TemporalType.DATE)
  private Date fecha; // Fecha del formulario

  // Relación con Trabajador
  @ManyToOne
  @JoinColumn(name = "idt", referencedColumnName = "idt", nullable = false)
  private TrabajadorModel trabajador;

  // Relación con Estudiante
  @ManyToOne
  @JoinColumn(name = "idest", referencedColumnName = "idest", nullable = false)
  private EstudianteModel estudiante;

  // Relación con ResValid
  @ManyToOne
  @JoinColumn(name = "resv_id", nullable = false)
  private ResValidModel resValid;

  public FormularioModel() {}

  // Getters y Setters
  public Long getFolio() { return folio; }

  public void setFolio(Long folio) { this.folio = folio; }

  public Date getFecha() { return fecha; }

  public void setFecha(Date fecha) { this.fecha = fecha; }

  public TrabajadorModel getTrabajador() { return trabajador; }

  public void setTrabajador(TrabajadorModel trabajador) {
    this.trabajador = trabajador;
  }

  public EstudianteModel getEstudiante() { return estudiante; }

  public void setEstudiante(EstudianteModel estudiante) {
    this.estudiante = estudiante;
  }

  public ResValidModel getResValid() { return resValid; }

  public void setResValid(ResValidModel resValid) { this.resValid = resValid; }
}
