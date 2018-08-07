import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRegistrarClientePage } from './modal-registrar-cliente';

@NgModule({
  declarations: [
    ModalRegistrarClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRegistrarClientePage),
  ],
})
export class ModalRegistrarClientePageModule {}
