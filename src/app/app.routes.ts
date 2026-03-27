import { Routes } from '@angular/router';
import { LoginComponent } from './features/pages/login/login';
import { ListaProdutosComponent } from './features/produtos/pages/lista-produtos/lista-produtos';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'produtos',
    component: ListaProdutosComponent
  }

];