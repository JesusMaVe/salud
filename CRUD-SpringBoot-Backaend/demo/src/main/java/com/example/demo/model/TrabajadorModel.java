package com.example.demo.model;

import jakarta.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "trabajador")
public class TrabajadorModel {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
                  generator = "trabajador_seq")
  @SequenceGenerator(name = "trabajador_seq", sequenceName = "trabajador_seq",
                     allocationSize = 1)
  @Column(name = "idt")
  private Long id;

  @Column(name = "nombre", nullable = false, length = 30) private String nombre;

  @Column(name = "apellidoMat", nullable = false, length = 30)
  private String apellidoMaterno;

  @Column(name = "apellidoPat", nullable = false, length = 30)
  private String apellidoPaterno;

  @Column(name = "edad") private Integer edad;

  @Column(name = "sexo", length = 10) private String sexo;

  @Column(name = "estadoCivil", length = 15) private String estadoCivil;

  @Column(name = "escolaridad", length = 20) private String escolaridad;

  @ManyToOne
  @JoinColumn(name = "ide", nullable = false)
  private EmpresaModel empresa;

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;
    TrabajadorModel that = (TrabajadorModel)o;
    return Objects.equals(id, that.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  public Long getId() { return id; }

  public void setId(Long id) { this.id = id; }

  public String getNombre() { return nombre; }

  public void setNombre(String nombre) { this.nombre = nombre; }

  public String getApellidoMaterno() { return apellidoMaterno; }

  public void setApellidoMaterno(String apellidoMaterno) {
    this.apellidoMaterno = apellidoMaterno;
  }

  public String getApellidoPaterno() { return apellidoPaterno; }

  public void setApellidoPaterno(String apellidoPaterno) {
    this.apellidoPaterno = apellidoPaterno;
  }

  public Integer getEdad() { return edad; }

  public void setEdad(Integer edad) { this.edad = edad; }

  public String getSexo() { return sexo; }

  public void setSexo(String sexo) { this.sexo = sexo; }

  public String getEstadoCivil() { return estadoCivil; }

  public void setEstadoCivil(String estadoCivil) {
    this.estadoCivil = estadoCivil;
  }

  public String getEscolaridad() { return escolaridad; }

  public void setEscolaridad(String escolaridad) {
    this.escolaridad = escolaridad;
  }

  public EmpresaModel getEmpresa() { return empresa; }

  public void setEmpresa(EmpresaModel empresa) { this.empresa = empresa; }
}
