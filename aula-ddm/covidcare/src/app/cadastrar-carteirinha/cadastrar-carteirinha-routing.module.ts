import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarCarteirinhaPage } from './cadastrar-carteirinha.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarCarteirinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarCarteirinhaPageRoutingModule {}
