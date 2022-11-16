package com.rural5g.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
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

import com.rural5g.api.entity.Escola;
import com.rural5g.api.repository.EscolaRepository;

@RestController
@RequestMapping("/api/escolas")
@CrossOrigin(origins = "*")
public class EscolaController {

	@Autowired
	private EscolaRepository repository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Escola> findAll() {
		return  repository.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Escola findById(@PathVariable Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Escola não encontrado"));
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Escola save(@RequestBody @Valid Escola escola) {
		return repository.save(escola);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Object update(@RequestBody @Valid Escola escola, @PathVariable Integer id) {
		findById(id);
		escola.setId(id);
		return save(escola);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		findById(id);
		repository.deleteById(id);
		
	
	}
}
