import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
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
//import { ApiProvider } from '../../providers/api/api';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-horasextras',
  templateUrl: 'horasextras.html',
})
export class HorasextrasPage {
  //los datos que se envian a la base de datos de los servicios
  horasextras : any = {
    id:'',
    nombre:'',
    apellidos:'',
    fecha_inicial:'',
    fecha_final:'',
    hora_inicial:'',
    hora_final:'',
    total_horas:'',
    empresa:'',
    sub_empresa:'',
    direccion:'',
    actividad:'',
    descanzo:''
  };
  tipohorario:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    //public api:ApiProvider,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HorasextrasPage');
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
    /*this.api.obtenerHorasextras().then(res => {
      console.log("<<< Datos de las Horas Extras: ",res);
    },err => {
      console.log(">>> Ocurrio un error: ",err);
    })*/
  }

  SendDataExtraHours(){
    console.log("se enviaran los datos para almacenar horas extras");
    this.horasextras.id = "0";
    this.horasextras.nombre = "test";
    this.horasextras.apellidos = "demo";
    //para calcular el total de las horas
    if(this.horasextras.hora_inicial != "" && this.horasextras.hora_final){
      this.horasextras.total_horas = this.calcularDiferenciaentreHoras();
    }
    this.horasextras.actividad = "test actividad";
    this.horasextras.descanzo = "si";

    let alert = this.alertCtrl.create({
      title: 'CSE Confirm',
      message: 'Do you want to save this information?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            //this.api.registrarHorasextrasApi(this.horasextras).then(res => {
              //console.log("se asignaron horas extras: ",res);
              this.getListadodeHorasExtras();
            //}, err => {
              //console.log("Error al guardar las horas extras: ",err);
            //});  
          }
        },
      ]
    });
    alert.present();
  }

  calcularDiferenciaentreHoras(){
    var __startTime = moment('"'+this.horasextras.fecha_inicial+'"T"'+this.horasextras.hora_inicial).format();
    var __endTime = moment('"'+this.horasextras.fecha_final+'"T"'+this.horasextras.hora_final).format();
    
    var __duration = moment.duration(moment(__endTime).diff(__startTime));
    var __hours = __duration.asHours();
    this.horasextras.totalhoras = __hours;
    
  }

}
