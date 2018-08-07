import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalIngresarNuevoServicioPage } from './modal-ingresar-nuevo-servicio';

@NgModule({
  declarations: [
    ModalIngresarNuevoServicioPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalIngresarNuevoServicioPage),
  ],
})
export class ModalIngresarNuevoServicioPageModule {}
