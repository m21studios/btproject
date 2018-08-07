import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalListarServiciosPage } from './modal-listar-servicios';

@NgModule({
  declarations: [
    ModalListarServiciosPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalListarServiciosPage),
  ],
})
export class ModalListarServiciosPageModule {}
