import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.css']
})
export class ListaProdutosComponent {

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
    { nome: 'Melancia', produtor: 'João', cidade: 'Ji-Paraná', preco: 15 },
    { nome: 'Mel', produtor: 'Carlos', cidade: 'Cacoal', preco: 25 },
    { nome: 'Limão', produtor: 'Ana', cidade: 'Rolim de Moura', preco: 8 },
  ];

}