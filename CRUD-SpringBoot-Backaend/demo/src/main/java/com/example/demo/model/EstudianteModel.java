package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "estudiante")
public class EstudianteModel {

  @Id @Column(name = "idest") private Long id;

  @Column(name = "nombre", nullable = false, length = 20) private String nombre;

  @Column(name = "apellidoMat", nullable = false, length = 20)
  private String apellidoMaterno;

  @Column(name = "apellidoPat", nullable = false, length = 20)
  private String apellidoPaterno;

  @Column(name = "grupo", length = 10) private String grupo;

  @Column(name = "contrasenia", length = 10) private String contrasenia;

  // Nuevo atributo UID
  @Column(name = "firebase_uid", nullable = false, unique = true)
  private String uid;

  // Nuevo atributo email
  @Column(name = "email", nullable = false, unique = true) private String email;

  // Getters y setters
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

  public String getGrupo() { return grupo; }

  public void setGrupo(String grupo) { this.grupo = grupo; }

  public String getContrasenia() { return contrasenia; }

  public void setContrasenia(String contrasenia) {
    this.contrasenia = contrasenia;
  }

  public String getUid() { return uid; }

  public void setUid(String uid) { this.uid = uid; }

  public String getEmail() { return email; }

  public void setEmail(String email) { this.email = email; }
}
