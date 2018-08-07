import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagenesEmpleadosPage } from './imagenes-empleados';

@NgModule({
  declarations: [
    ImagenesEmpleadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagenesEmpleadosPage),
  ],
})
export class ImagenesEmpleadosPageModule {}
