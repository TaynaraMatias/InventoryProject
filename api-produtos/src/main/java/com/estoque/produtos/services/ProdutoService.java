package com.estoque.produtos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estoque.produtos.model.Produto;
import com.estoque.produtos.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository repository;
	
	public Iterable<Produto> getProdutos(){
		return repository.findAll();
	}
	
	public void createProduto(Produto produto) {
		repository.save(produto);
	}
	
	public Produto getProduto(Long id) {
		return repository.findById(id).orElse(null);
	}
	
	public void updateProduto(Produto produto) {
		repository.save(produto);
	}
	
	public void deleteProduto(Produto produto) {
		repository.delete(produto);
	}
}
