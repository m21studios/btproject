import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-modal-registrar-cliente',
  templateUrl: 'modal-registrar-cliente.html',
})
export class ModalRegistrarClientePage {

  nuevoCliente:any = {
    id:'',identificacion:'',nombres:'',apellidos:'',direccion:'',telefono:'',email:'',contrasena:''
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRegistrarClientePage');
  }

  GuardarCliente()
  {
    this.nuevoCliente.id = "0";
    this.nuevoCliente.contrasena = "123456";
    var empresanueva = firebase.database().ref().child("clientes");
    empresanueva.push(this.nuevoCliente);
  }

  ActualizarCliente()
  {

  }

  Cancelar()
  {
    
  }

}
