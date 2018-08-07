import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { InicioPage } from '../../pages/inicio/inicio';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
//import { ChatPage } from '../../pages/chat/chat';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild("content") content : any;
  userName : string = "";
  message : string = "";
  messages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.getMessajes();
  }

  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
  }

  getMessajes()
  {
    console.log("se cargaran los mensajes");
    var messagesRef = firebase.database().ref().child("chat");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data)
      {
        this.messages.push(data[key]);
      }
    });

    this.scrollToBotton();
  }

  sendMessajes()
  {
    var messagesRef = firebase.database().ref().child("chat");
    messagesRef.push({mensaje: this.message, nombre: this.userName})
    this.message = "";
  }

  scrollToBotton()
  {
    var contentEnd = document.getElementById("content-end").offsetTop;
    this.content.scrollTo(0, contentEnd, 300)
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

 /* goChat()
  {
    console.log('chat page');
    this.navCtrl.push(ChatPage);
  }*/

  GoHorasExtras(){
    this.navCtrl.push(HorasextrasPage);
  }

  GoVerImagenes(){
    this.navCtrl.push(ImagenesEmpleadosPage);
  }

  GoTracking(){
    this.navCtrl.push(TrackingPage);
  }

}
