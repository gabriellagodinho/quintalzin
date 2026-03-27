import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.css']
})
export class ListaProdutosComponent {

  constructor(private router: Router) {}

  busca = '';
  cidade = '';
  tipoProduto = '';

  cidades = [
    'Ji-Paraná',
    'Cacoal',
    'Rolim de Moura'
  ];

  tiposProdutos = [
    'Mel',
    'Melancia',
    'Limão',
    'Queijo'
  ];

  produtos = [
    {
      id: 1,
      nome: 'Maçã',
      produtor: 'João',
      cidade: 'Ji-Paraná',
      preco: 15,
      quantidade: 12,
      imagem: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
    },
    {
      id: 2,
      nome: 'Mel',
      produtor: 'Carlos',
      cidade: 'Cacoal',
      preco: 25,
      quantidade: 5,
      imagem: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924'
    },
    {
      id: 3,
      nome: 'Tomate',
      produtor: 'Ana',
      cidade: 'Rolim de Moura',
      preco: 8,
      quantidade: 20,
      imagem: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924'
    }
  ];

  verProduto(produto: any){
    this.router.navigate(['/produto', produto.id]);
  }

}