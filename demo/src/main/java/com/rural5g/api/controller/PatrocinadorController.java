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

import com.rural5g.api.entity.Patrocinador;
import com.rural5g.api.repository.PatrocinadorRepository;

@RestController
@RequestMapping("/api/patrocinadores")
public class PatrocinadorController {

	@Autowired
	private PatrocinadorRepository repository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Patrocinador> findAll() {
		return  repository.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Patrocinador findById(@PathVariable Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Patrocinador não encontrado"));
	}
	
	@PostMapping("/signup")
	@ResponseStatus(HttpStatus.CREATED)
	public Patrocinador save(@RequestBody @Valid Patrocinador patrocinador) {
		return repository.save(patrocinador);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Object update(@RequestBody @Valid Patrocinador patrocinador, @PathVariable Integer id) {
		findById(id);
		patrocinador.setId(id);
		return save(patrocinador);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		findById(id);
		repository.deleteById(id);
		
	
	}
}
