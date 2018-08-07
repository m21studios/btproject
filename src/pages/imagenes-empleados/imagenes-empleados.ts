import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { ChatPage } from '../../pages/chat/chat';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { InicioPage } from '../../pages/inicio/inicio';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-imagenes-empleados',
  templateUrl: 'imagenes-empleados.html',
})
export class ImagenesEmpleadosPage {

  images:any = []; //para almacenar las imagenes
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagenesEmpleadosPage');
    this.images = [
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175',
      'http://placehold.it/200x200',
      'http://placehold.it/175x175'
    ];
  }

  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
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

  goChat()
  {
    console.log('chat page');
    this.navCtrl.push(ChatPage);
  }

  GoHorasExtras(){
    this.navCtrl.push(HorasextrasPage);
  }

  GoTracking(){
    this.navCtrl.push(TrackingPage);
  }

}
