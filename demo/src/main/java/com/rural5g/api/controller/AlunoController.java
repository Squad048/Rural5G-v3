package com.rural5g.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.rural5g.api.entity.Aluno;
import com.rural5g.api.repository.AlunoRepository;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {
	
	@Autowired
	private AlunoRepository repository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Aluno> findAll() {
		return  repository.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Aluno findById(@PathVariable Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Aluno não encontrado"));
	}
	
	@PostMapping("/signup")
	@ResponseStatus(HttpStatus.CREATED)
	public Aluno save(@RequestBody @Valid Aluno aluno) {
		int turma = (int) Math.round(Math.random());
		aluno.setTurma(turma);
		return repository.save(aluno);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Object update(@RequestBody @Valid Aluno aluno, @PathVariable Integer id) {
		findById(id);
		aluno.setId(id);
		return save(aluno);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		findById(id);
		repository.deleteById(id);
		
	
	}
	
}
