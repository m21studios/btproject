import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRegistrarEmpresaPage } from './modal-registrar-empresa';

@NgModule({
  declarations: [
    ModalRegistrarEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRegistrarEmpresaPage),
  ],
})
export class ModalRegistrarEmpresaPageModule {}
