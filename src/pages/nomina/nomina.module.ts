import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NominaPage } from './nomina';

@NgModule({
  declarations: [
    NominaPage,
  ],
  imports: [
    IonicPageModule.forChild(NominaPage),
  ],
})
export class NominaPageModule {}
