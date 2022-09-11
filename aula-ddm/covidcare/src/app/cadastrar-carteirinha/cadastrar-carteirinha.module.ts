import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarCarteirinhaPageRoutingModule } from './cadastrar-carteirinha-routing.module';

import { CadastrarCarteirinhaPage } from './cadastrar-carteirinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarCarteirinhaPageRoutingModule
  ],
  declarations: [CadastrarCarteirinhaPage]
})
export class CadastrarCarteirinhaPageModule {}
