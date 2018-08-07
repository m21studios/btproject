import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empleado } from '../../models/Empleado';
import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { Result } from '../../models/Result';
import { InicioPage } from '../inicio/inicio';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-nomina',
  templateUrl: 'nomina.html',
})
export class NominaPage {

  empleados: Empleado[];
  empleadosaux : Empleado[];
  columnas : 15;

  nhoras:boolean = true;
  nsalario:boolean = true;
  ntodos:boolean = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private emplSVC: EmpleadosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NominaPage');
    this.nhoras = false;
    this.nsalario = false;
    this.ntodos = false;
    this.GetEmpleados();
  }

  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
  }

  empleadonomina(){
    this.nhoras = true;
    this.nsalario = true;
    this.ntodos = false;
  }

  todalanomina(){
    this.nhoras = false;
    this.nsalario = false;
    this.ntodos = true;
  }

  GetEmpleados() {
    let aux : any;
    this.emplSVC.getEmpleados().subscribe((s: Empleado[]) => {
      //this.empleados = s; /*= s.map(
      this.empleados = s.map(
      m => {
       aux = m.nombres + m.apellidos;
       this.empleadosaux = aux;
       console.log("empleados aux", aux);
          //if (m.pulsera === undefined || m.pulsera === '' || m.pulsera === null) { m.pulsera = 'no registra'; }
          return m;
        }
      );
      //console.log("empleados", this.empleados);
    });
  }

  /*InitEmpleados() {
    this.emplSVC.getEmpleados().subscribe((s: Result<Empleado[]>) => {
      this.empleados = s.Data;
      console.log("los empleados son: ", this.empleados)
      if (s.IsOk) {
        this.empleados = s.Data;
        console.log("los empleados son: ", this.empleados)
      } else {
        //this.util.showError(res.Mensaje);
        console.log("no se cargaron los empleados")
      }
    });
    /*this.cltSVC.GetClientes().subscribe((res: Result<Cliente[]>) => {
      if (res.IsOk) {
        this.clientes = res.Data;
      } else {
        this.util.showError(res.Mensaje);
      }
    });
}*/

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
