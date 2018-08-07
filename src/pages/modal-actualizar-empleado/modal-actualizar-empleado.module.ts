import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalActualizarEmpleadoPage } from './modal-actualizar-empleado';

@NgModule({
  declarations: [
    ModalActualizarEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalActualizarEmpleadoPage),
  ],
})
export class ModalActualizarEmpleadoPageModule {}
