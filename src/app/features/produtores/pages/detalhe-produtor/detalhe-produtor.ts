import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe-produtor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe-produtor.html',
  styleUrls: ['./detalhe-produtor.css']
})
export class DetalheProdutorComponent {

  produtor = {

    nome: 'João da Silva',

    cidade: 'Ji-Paraná - RO',

    telefone: '(69) 99999-9999',

    descricao:
      'Produtor rural especializado em frutas e hortaliças cultivadas de forma sustentável.',

    foto:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'

  };

}