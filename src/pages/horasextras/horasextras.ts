import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { ChatPage } from '../../pages/chat/chat';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { InicioPage } from '../../pages/inicio/inicio';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-horasextras',
  templateUrl: 'horasextras.html',
})
export class HorasextrasPage {
  //los datos que se envian a la base de datos de los servicios
  horasextras : any = {
    startDate:'',
    endDate:'',
    startTime:'',
    endTime:'',
    totalHoras:'',
    tipodeHoras:'',
    workplace:'',
    direccion:'',
    empleadoNombre:'',
    empleadoApellido:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorasextrasPage');
    this.getListadodeHorasExtras();
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

  GoVerImagenes(){
    this.navCtrl.push(ImagenesEmpleadosPage);
  }

  GoTracking(){
    this.navCtrl.push(TrackingPage);
  }

  getListadodeHorasExtras(){
    console.log("se van a cargar horas extras de las peticiones de los empleados");
  }

  SendDataExtraHours(){
    console.log("se enviaran los datos para almacenar horas extras");
  }

}
