import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { UtilProvider } from '../../providers/util/util';
//import { ServiciosProvider } from '../../providers/servicios/servicios';
//import { Result } from '../../models/Result';
//import { Solicitud } from '../../models/Solicitud';
import { InicioPage } from '../../pages/inicio/inicio';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-reanudar',
  templateUrl: 'reanudar.html',
})
export class ReanudarPage {

  fecha_inicio: string;
  fecha_final: string;
  //solicitudes: Solicitud[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    //private util: UtilProvider, 
    //private svc: ServiciosProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReanudarPage');
    //this.fecha_inicio = this.util.getActualDate();
    //this.fecha_final = this.util.getActualDate();
  }

  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
  }

  getSolicitudes() {
    /*this.svc.ObtenerSolicitudes(this.fecha_inicio, this.fecha_final)
      .subscribe((s: Solicitud[]) => {
        this.solicitudes = s.map(m => {
          m.nombre_empleado = m.empleado.nombres + ' ' + m.empleado.apellidos;
          m.identificacion_empleado = m.empleado.identificacion;
          return m;
        });
      });*/
  }

  AceptarReanudacion(actual_solicitud) {
    /*this.svc.AprobarSolicitud(actual_solicitud.id).subscribe((s: Result<Solicitud>) => {
      if (s.IsOk) {
        this.util.showSuccess('Solicitud aprobada exitosamente');
      } else {
        this.util.showError(s.Mensaje);
      }

      this.getSolicitudes();
    });*/
  }

  NegarReanudacion(actual_solicitud) {
    /*this.svc.NegarSolicitud(actual_solicitud.id).subscribe((s: Result<Solicitud>) => {
      if (s.IsOk) {
        this.util.showSuccess('Solicitud negada exitosamente');
      } else {
        this.util.showError(s.Mensaje);
      }

      this.getSolicitudes();
    });*/
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
