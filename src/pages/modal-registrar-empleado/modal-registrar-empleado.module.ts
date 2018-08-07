import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRegistrarEmpleadoPage } from './modal-registrar-empleado';

@NgModule({
  declarations: [
    ModalRegistrarEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRegistrarEmpleadoPage),
  ],
})
export class ModalRegistrarEmpleadoPageModule {}
