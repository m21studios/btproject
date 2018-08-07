import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalRegistrarClientePage } from '../../pages/modal-registrar-cliente/modal-registrar-cliente';
import { Cliente } from '../../models/Cliente';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { Result } from '../../models/Result';
import { InicioPage } from '../../pages/inicio/inicio';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { ModalActualizarClientePage } from '../../pages/modal-actualizar-cliente/modal-actualizar-cliente';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes: Cliente[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modal:ModalController,
    private clienteSVC: ClientesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
    this.getClientes();
  }

  
  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
  }

  getClientes() {
    this.clienteSVC.GetClientes().subscribe((clts: Result<Cliente[]>) => {
      if (clts.IsOk) {
        this.clientes = clts.Data;
      }else {
        //this.util.showError(clts.Mensaje);
      }

      console.log(this.clientes);
    });
  }

  RegistrarNuevoCliente()
  {
    console.log('se va a registrar una nueva empresa');
    const registrarCliente = this.modal.create(ModalRegistrarClientePage);
    registrarCliente.present();
  }

  GoEmpresas()
  {
    console.log('se va a abrir la pagina Empresas');
    this.navCtrl.push(EmpresasPage);
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

  ActualizarCliente(){
    const actualizarCliente = this.modal.create(ModalActualizarClientePage);
    actualizarCliente.present();
  }

}
