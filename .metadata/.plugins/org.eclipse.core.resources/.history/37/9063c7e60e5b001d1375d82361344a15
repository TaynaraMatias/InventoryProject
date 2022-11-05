package com.estoque.produtos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.estoque.produtos.model.Cliente;
import com.estoque.produtos.model.Produto;
import com.estoque.produtos.services.ClienteService;
import com.estoque.produtos.services.ProdutoService;

@RestController
public class ProdutosController {
	
	@Autowired
	private ProdutoService produtoService;
	

	@GetMapping("/produtos")
	public ResponseEntity<Iterable<Produto>> getProdutos(){
		return ResponseEntity.ok().body(produtoService.getProdutos());
	}
	
	@GetMapping("/produtos/{id}")
	public ResponseEntity<Produto> getProduto(@PathVariable Long id){
		return ResponseEntity.ok().body(produtoService.getProduto(id));
	}
	
	@PostMapping("/produtos")
	public ResponseEntity<Void> adicionarProduto(@RequestBody Produto produto){
		produtoService.createCliente(produto);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@PutMapping("/produtos")
	public ResponseEntity<Void> atualizarProduto(@RequestBody Produto produto){
		produtoService.updateProduto(produto);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/produtos/{id}")
	public ResponseEntity<Void> apagarProduto(@PathVariable Long id){
		var produto = produtoService.getProduto(id);
		produtoService.deleteProduto(produto);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
}
