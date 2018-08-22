import { Component,  } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { ModalRegistrarEmpleadoPage } from '../../pages/modal-registrar-empleado/modal-registrar-empleado';
import { ModalIngresarNuevoServicioPage } from '../../pages/modal-ingresar-nuevo-servicio/modal-ingresar-nuevo-servicio';
import { ModalListarServiciosPage } from '../../pages/modal-listar-servicios/modal-listar-servicios';
//import { Cliente } from '../../models/Cliente';
//import { Servicio } from '../../models/Servicio';
//import { Empleado } from '../../models/Empleado';
//import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { InicioPage } from '../../pages/inicio/inicio';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { ModalActualizarEmpleadoPage } from '../../pages/modal-actualizar-empleado/modal-actualizar-empleado';
import { ModalDetallesdelservicioPage } from '../../pages/modal-detallesdelservicio/modal-detallesdelservicio';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { TrackingPage } from '../../pages/tracking/tracking';
//import { ApiProvider } from '../../providers/api/api';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-empleados',
  templateUrl: 'empleados.html',
})
export class EmpleadosPage {


  //empleado:any;
  empleados:any; //= {foto:'',identificacion:'',nombres:'',apellidos:'',telefono:'',direccion:'',BateriaPhone:'',estado:''};
  consultaEmpleado:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modal: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EmpleadosPage');
    this.GetEmpleados();
 
  }

  ionViewDidEnter(){
    this.GetEmpleados();
  }

  BuscarunEmpleado(data:any){
    data = this.consultaEmpleado;
    if( data == null){
      let alert = this.alertCtrl.create({
        title: 'CSE ',
        subTitle: 'The search field is empty.',
        buttons: ['Dismiss']
      });
      alert.present();
    }else{
      //busco en la base de datos y asigno la informacion
      let toast = this.toastCtrl.create({
        message: 'Employee found.',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }
  }

  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
  }

  RegistrarEmpleado()
  {
    console.log('se va a registrar un nuevo empleado');
    const registrarEmpleado = this.modal.create(ModalRegistrarEmpleadoPage);
    registrarEmpleado.present();
  }

  ListarServicios(data)
  {
    console.log('se va a listar los servicios del empleado');
    const listarservicios = this.modal.create(ModalListarServiciosPage,{dataId:data});
    listarservicios.present();
  }

  IngresarServicio(data){
    console.log('se va a registrar un nuevo servicio para el empleado');
    const nuevoservicio = this.modal.create(ModalIngresarNuevoServicioPage);
    nuevoservicio.present();
  } 

  nuevoServicio(id){
    console.log('se va a registrar un nuevo servicio para el empleado');
    const nuevoservicio = this.modal.create(ModalIngresarNuevoServicioPage);
    nuevoservicio.present();
  }

  ActualizarEmpleado(id){
    const actualizarEmpleado = this.modal.create(ModalActualizarEmpleadoPage);
    actualizarEmpleado.present();
  }

  detalleServicioEmpleado(){
    const detalleservicio = this.modal.create(ModalDetallesdelservicioPage);
    detalleservicio.present();
  }

  GetEmpleados() {
    var empleadosRef = firebase.database().ref().child("empleados");
    empleadosRef.on("value", (snap) => {
      var data = snap.val();
      this.empleados = [];
      for(var key in data)
      {
        this.empleados.push(data[key]);
      }
    });
  }

  GoEmpresas()
  {
    console.log('se va a abrir la pagina Empresas');
    this.navCtrl.push(EmpresasPage);
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

 

}
