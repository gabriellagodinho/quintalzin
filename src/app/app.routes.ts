import { Routes } from '@angular/router';
import { LoginComponent } from './features/pages/login/login';
import { ListaProdutosComponent } from './features/produtos/pages/lista-produtos/lista-produtos';
import { DetalheProdutoComponent } from './features/produtos/pages/detalhe-produto/detalhe-produto';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'produtos',
    component: ListaProdutosComponent
  },

  {
  path: 'produto/:id',
  component: DetalheProdutoComponent,
  data: { renderMode: 'client' }
}

];