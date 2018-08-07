import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalActualizarClientePage } from './modal-actualizar-cliente';

@NgModule({
  declarations: [
    ModalActualizarClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalActualizarClientePage),
  ],
})
export class ModalActualizarClientePageModule {}
