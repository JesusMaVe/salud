package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "empresa")
public class EmpresaModel {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "empresa_seq")
  @SequenceGenerator(name = "empresa_seq", sequenceName = "empresa_seq",
                     allocationSize = 1)
  @Column(name = "ide")
  private Long id;

  @Column(name = "nombre", nullable = false, length = 20) private String nombre;

  @Column(name = "direccion", nullable = false, length = 30)
  private String direccion;

  @OneToMany(mappedBy = "empresa", cascade = CascadeType.ALL,
             orphanRemoval = true)
  @JsonIgnore
  private Set<TrabajadorModel> trabajadores = new HashSet<>();

  public Long getId() { return id; }

  public void setId(Long id) { this.id = id; }

  public String getNombre() { return nombre; }

  public void setNombre(String nombre) { this.nombre = nombre; }

  public String getDireccion() { return direccion; }

  public void setDireccion(String direccion) { this.direccion = direccion; }

  public Set<TrabajadorModel> getTrabajadores() { return trabajadores; }

  public void setTrabajadores(Set<TrabajadorModel> trabajadores) {
    this.trabajadores = trabajadores;
  }
}
