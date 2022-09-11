import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCarteirinhaPage } from './menu-carteirinha.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCarteirinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCarteirinhaPageRoutingModule {}
