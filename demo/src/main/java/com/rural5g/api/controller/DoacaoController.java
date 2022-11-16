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

import com.rural5g.api.entity.Doacao;
import com.rural5g.api.repository.DoacaoRepository;

@RestController
@RequestMapping("/api/doacoes")
public class DoacaoController {
	
	@Autowired
	private DoacaoRepository repository;
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Doacao> findAll() {
		return  repository.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Doacao findById(@PathVariable Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Doacao não encontrado"));
	}
	
	@PostMapping("/signup")
	@ResponseStatus(HttpStatus.CREATED)
	public Doacao save(@RequestBody @Valid Doacao doacao) {
		return repository.save(doacao);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Object update(@RequestBody @Valid Doacao doacao, @PathVariable Integer id) {
		findById(id);
		doacao.setId(id);
		return save(doacao);
		
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		findById(id);
		repository.deleteById(id);
		
	
	}
}
