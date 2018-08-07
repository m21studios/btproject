import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empleado } from '../../models/Empleado';
import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { UtilProvider } from '../../providers/util/util';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { MapProvider } from '../../providers/map/map';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { Result } from '../../models/Result';

@IonicPage()
@Component({
  selector: 'page-modal-actualizar-empleado',
  templateUrl: 'modal-actualizar-empleado.html',
})
export class ModalActualizarEmpleadoPage {

  actualizarEmpleado: Empleado = new Empleado();
  empresas: any = [];
  empleados: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private empSVC: EmpresasProvider,
    private emplSVC: EmpleadosProvider,
    private mapSVC: MapProvider,
    private serviceSVC: ServiciosProvider,
    public util: UtilProvider,
    private cltSVC: ClientesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalActualizarEmpleadoPage');
  }

  ActualizarEmpleado()
  {
    console.log("se va a actualizar un empleado");
  }

}
