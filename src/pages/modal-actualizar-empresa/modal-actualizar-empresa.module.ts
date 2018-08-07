import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalActualizarEmpresaPage } from './modal-actualizar-empresa';

@NgModule({
  declarations: [
    ModalActualizarEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalActualizarEmpresaPage),
  ],
})
export class ModalActualizarEmpresaPageModule {}
