import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalRegistrarEmpresaPage } from '../../pages/modal-registrar-empresa/modal-registrar-empresa';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { UtilProvider } from '../../providers/util/util';
import { InicioPage } from '../../pages/inicio/inicio';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { ModalActualizarEmpresaPage } from '../../pages/modal-actualizar-empresa/modal-actualizar-empresa';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html',
})
export class EmpresasPage {

  empresas: any = [];
  constructor(private empSVC: EmpresasProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modal: ModalController,
    public util: UtilProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresasPage');
    this.GetEmpresas();
  }

  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
  }

  GetEmpresas() {
    this.empSVC.all().subscribe(
      s => {
        this.empresas = s;
      }
    );
  }

  RegistrarNuevaEmpresa()
  {
    console.log('se va a registrar una nueva empresa');
    const registrarEmpresa = this.modal.create(ModalRegistrarEmpresaPage);
    registrarEmpresa.present();
  }

  GoEmpleados()
  {
    console.log('se va a abrir la pagina Empleados');
    this.navCtrl.push(EmpleadosPage);
  }

  GoConsultas()
  {
    console.log('se va a abrir la pagina Consultas');
    this.navCtrl.push(ConsultasPage);
  }

  GoClientes()
  {
    console.log('se va a abrir la pagina Clientes');
    this.navCtrl.push(ClientesPage);
  }

  GoNomina()
  {
    console.log('se va abrir la pagina Nomina');
    this.navCtrl.push(NominaPage);
  }

  GoReanudar()
  {
    console.log('se va a ajecutar Reanudaciones');
    this.navCtrl.push(ReanudarPage);
  }

  GoHorasExtras(){
    this.navCtrl.push(HorasextrasPage);
  }

  GoVerImagenes(){
    this.navCtrl.push(ImagenesEmpleadosPage);
  }

  GoTracking(){
    this.navCtrl.push(TrackingPage);
  }

  ActualizarEmpresa(){
    console.log("se va a actualizar una empresa");
    //this.navCtrl.push(ModalActualizarEmpresaPage);
    const actualizarEmpresa = this.modal.create(ModalActualizarEmpresaPage);
    actualizarEmpresa.present();
  }

}
