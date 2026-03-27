import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe-produto.html',
  styleUrls: ['./detalhe-produto.css']
})
export class DetalheProdutoComponent {

  produto: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const produtos = [
      {
        id: '1',
        nome: 'Maçã',
        produtor: 'João',
        cidade: 'Ji-Paraná',
        preco: 15,
        quantidade: 12,
        descricao: 'Maçã doce direto do produtor 🍎',
        imagem: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
      },
      {
        id: '2',
        nome: 'Mel',
        produtor: 'Carlos',
        cidade: 'Cacoal',
        preco: 25,
        quantidade: 5,
        descricao: 'Mel puro e natural 🍯',
        imagem: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924'
      },
      {
        id: '3',
        nome: 'Tomate',
        produtor: 'Ana',
        cidade: 'Rolim de Moura',
        preco: 8,
        quantidade: 20,
        descricao: 'Tomate fresco colhido na hora 🍅',
        imagem: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924'
      }
    ];

    this.produto = produtos.find(p => p.id === id);
  }

  voltar() {
    this.router.navigate(['/produtos']);
  }

  abrirWhatsApp() {
    const mensagem = `Olá! Tenho interesse no produto ${this.produto.nome}`;
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

}