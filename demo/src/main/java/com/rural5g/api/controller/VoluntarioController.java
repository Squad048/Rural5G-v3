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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;

import com.rural5g.api.entity.Voluntario;
import com.rural5g.api.repository.VoluntarioRepository;

public class VoluntarioController {

	@Autowired
	private VoluntarioRepository repository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Voluntario> findAll() {
		return  repository.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Voluntario findById(@PathVariable Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Voluntario não encontrado"));
	}
	
	@PostMapping("/signup")
	@ResponseStatus(HttpStatus.CREATED)
	public Voluntario save(@RequestBody @Valid Voluntario voluntario) {
		return repository.save(voluntario);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Object update(@RequestBody @Valid Voluntario voluntario, @PathVariable Integer id) {
		findById(id);
		voluntario.setId(id);
		return save(voluntario);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		findById(id);
		repository.deleteById(id);
		
	
	}
}
