import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu-carteirinha',
    loadChildren: () => import('./menu-carteirinha/menu-carteirinha.module').then( m => m.MenuCarteirinhaPageModule)
  },
  {
    path: 'carteirinha',
    loadChildren: () => import('./carteirinha/carteirinha.module').then( m => m.CarteirinhaPageModule)
  },
  {
    path: 'medicamento',
    loadChildren: () => import('./medicamento/medicamento.module').then( m => m.MedicamentoPageModule)
  },
  {
    path: 'vacina',
    loadChildren: () => import('./vacina/vacina.module').then( m => m.VacinaPageModule)
  },
  {
    path: 'postos',
    loadChildren: () => import('./postos/postos.module').then( m => m.PostosPageModule)
  },
  {
    path: 'cadastrar-carteirinha',
    loadChildren: () => import('./cadastrar-carteirinha/cadastrar-carteirinha.module').then( m => m.CadastrarCarteirinhaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
