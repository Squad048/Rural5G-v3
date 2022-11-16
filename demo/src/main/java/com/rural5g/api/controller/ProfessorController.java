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

import com.rural5g.api.entity.Professor;
import com.rural5g.api.repository.ProfessorRepository;

@RestController
@RequestMapping("/api/professores")
public class ProfessorController {

	@Autowired
	private ProfessorRepository repository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Professor> findAll() {
		return  repository.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Professor findById(@PathVariable Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Professor não encontrado"));
	}
	
	@PostMapping("/signup")
	@ResponseStatus(HttpStatus.CREATED)
	public Professor save(@RequestBody @Valid Professor professor) {
		return repository.save(professor);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Object update(@RequestBody @Valid Professor professor, @PathVariable Integer id) {
		findById(id);
		professor.setId(id);
		return save(professor);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		findById(id);
		repository.deleteById(id);
		
	
	}
}
