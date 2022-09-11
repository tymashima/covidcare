import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCarteirinhaPageRoutingModule } from './menu-carteirinha-routing.module';

import { MenuCarteirinhaPage } from './menu-carteirinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCarteirinhaPageRoutingModule
  ],
  declarations: [MenuCarteirinhaPage]
})
export class MenuCarteirinhaPageModule {}
