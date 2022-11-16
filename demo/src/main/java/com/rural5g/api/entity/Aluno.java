package com.rural5g.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.validator.constraints.br.CPF;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Aluno {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = false, length = 50)
	private String nome;
	@Column(length = 40, nullable = false, unique = true)
	private String email;
	@Column(length = 11, nullable = false, unique = true)
	private String cpf;
	@Column(length = 11, nullable = false, unique = true)
	private String celular;
	@Column(nullable = false, length = 30)
	private String cidade;
	@Column(nullable = false, length = 30)
	private String estado;
	@Column(nullable = false, length = 30)
	private String bairro;
	@Column(nullable = false)
	private int Turma;
}
