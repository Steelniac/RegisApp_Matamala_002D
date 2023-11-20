import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './principal-routing.module';

import { AlertPage } from './principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
