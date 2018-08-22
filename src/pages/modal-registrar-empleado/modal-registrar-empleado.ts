import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-modal-registrar-empleado',
  templateUrl: 'modal-registrar-empleado.html',
})
export class ModalRegistrarEmpleadoPage {

  nuevoEmpleado:any = {
    id:'',
    idempleado:'',
    nombres:'',
    apellidos:'',
    direccion:'',
    telefono:'',
    email:'',
    contrasena:'',
    imagen:''
  };

  sendData:any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRegistrarEmpleadoPage');
  }

  GetEmpresas() {

  }

  Guardar() {
    console.log("se va a guardar un empleado nuevo");
    this.nuevoEmpleado.id = "0";
    this.nuevoEmpleado.contrasena = "123456";
    this.nuevoEmpleado.imagen = "assets/imgs/jefe.png";
    var empleadonuevo = firebase.database().ref().child("empleados");
    empleadonuevo.push(this.nuevoEmpleado);

    

  }

  cargarImagenFromPc(){
    console.log("se cargara la imagen del empleado desde el pc");
  }

  Cancelar(){
    this.nuevoEmpleado = "";
  }

}
