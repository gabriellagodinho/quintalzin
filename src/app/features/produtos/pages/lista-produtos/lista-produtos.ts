import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  produtor: string;
  cidade: string;
  preco: number;
  unidade: string;
  quantidade: number;
  imagem: string;
}

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
    'Frutas',
    'Mel',
    'Hortaliças',
    'Laticínios'
  ];

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Maçã',
      categoria: 'Frutas',
      produtor: 'João da Silva',
      cidade: 'Ji-Paraná',
      preco: 15,
      unidade: 'kg',
      quantidade: 12,
      imagem: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
    },
    {
      id: 2,
      nome: 'Mel Artesanal',
      categoria: 'Mel',
      produtor: 'Carlos Oliveira',
      cidade: 'Cacoal',
      preco: 25,
      unidade: 'kg',
      quantidade: 5,
      imagem: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924'
    },
    {
      id: 3,
      nome: 'Tomate Italiano',
      categoria: 'Hortaliças',
      produtor: 'Ana Souza',
      cidade: 'Rolim de Moura',
      preco: 8,
      unidade: 'kg',
      quantidade: 20,
      imagem: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924'
    }
  ];

  get produtosFiltrados(): Produto[] {

    return this.produtos.filter(produto => {

      const buscaMatch =
        produto.nome.toLowerCase().includes(this.busca.toLowerCase()) ||
        produto.produtor.toLowerCase().includes(this.busca.toLowerCase());

      const cidadeMatch =
        !this.cidade || produto.cidade === this.cidade;

      const categoriaMatch =
        !this.tipoProduto || produto.categoria === this.tipoProduto;

      return buscaMatch && cidadeMatch && categoriaMatch;

    });

  }

  verProduto(produto: Produto) {
    this.router.navigate(['/produto', produto.id]);
  }

}