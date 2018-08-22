import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
//import { ServiciosProvider } from '../../providers/servicios/servicios';
//import { UtilProvider } from '../../providers/util/util';
//import { Result } from '../../models/Result';
//import { Servicio } from '../../models/Servicio';
//import { Intervalo } from '../../models/Intervalo';
import { InicioPage } from '../../pages/inicio/inicio';
//import { ModalDetallesdelservicioPage } from '../../pages/modal-detallesdelservicio/modal-detallesdelservicio';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
import { TrackingPage } from '../../pages/tracking/tracking';

@IonicPage()
@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  //servicio_actual: Servicio;
  //intervalo_actual: Intervalo;

  fecha_inicio = '';
  fecha_final = '';
  cedula = '';
  total_minutos = 0;

  //resultado_servicios: Servicio[];
  //intervalos: Intervalo[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modal : ModalController,
    //private servicios: ServiciosProvider, 
    //public util: UtilProvider
  ) 
    {

      //this.resultado_servicios = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPage');
    //this.fecha_inicio = this.util.getActualDate();
    //this.fecha_final = this.util.getActualDate();
  }

  goHome()
  {
    console.log("volviendo a home page");
    this.navCtrl.push(InicioPage);
    
  }

  getServicios() {
    
  }

  ShowPosition(servicio) {
    //this.servicio_actual = servicio;
    //console.log(this.servicio_actual);
    //$(this.ModalServicioPosicionID).foundation('open');
  }



  ShowDetalles(servicio) {
    /*this.intervalos = [];
    this.servicio_actual = servicio;
    this.total_minutos = 0;
    this.servicios.ObtenerIntervalos(this.servicio_actual.id)
      .subscribe((s: Result<Intervalo[]>) => {
        if (s.IsOk) {

          this.intervalos = s.Data.map(m => {

            m.estadoTexto = this.util.ParseEstadoIntervalo(m.estado);

            if (m.motivo == null) {
              m.motivo = 'No definido';
            }

            if (m.estado === 1) {
              this.total_minutos += m.minutos;
            }

            return m;
          });

          console.log(this.intervalos);

          //$(this.ModalServicioDetallesID).foundation('open');
        } else {
          this.util.showError(s.Mensaje);
        }
      });*/

  }

  ShowPhoto(intervalo) {
    //this.intervalo_actual = intervalo;
    //console.log(intervalo);
  }

  /*AceptarIntervalo(inter: Intervalo) {
    if (inter.estado > 0) { return; }
    this.servicios.UpdateIntervalo(inter.id, 1)
      .subscribe((s: Result<Intervalo>) => {
        if (s.IsOk) {
          // aplico cambios al intervalo actual
          inter.estado = s.Data.estado;
          inter.estadoTexto = this.util.ParseEstadoIntervalo(inter.estado);
          this.util.showSuccess('intervalo aprobado exitosamente');
        } else {
          this.util.showError(s.Mensaje);
        }
      });
  }*/

  /*NegarIntervalo(inter: Intervalo) {
    if (inter.estado > 0) { return; }
    this.servicios.UpdateIntervalo(inter.id, 2)
      .subscribe((s: Result<Intervalo>) => {
        if (s.IsOk) {
          // aplico cambios al intervalo actual
          inter.estado = s.Data.estado;
          inter.estadoTexto = this.util.ParseEstadoIntervalo(inter.estado);
          this.util.showSuccess('intervalo negado exitosamente');
        } else {
          this.util.showError(s.Mensaje);
        }
      });
  }*/

  CancelarServicio() {
    /*if (this.servicio_actual === undefined) { return; }
    if (this.servicio_actual.estado === 5 || this.servicio_actual.estado === 6) {
      this.util.showError('El servicio ya fue tramitado');
      return;
    }
    this.servicios.UpdateServicio(this.servicio_actual.id, 6)
      .subscribe((s: Result<Servicio>) => {
        if (s.IsOk) {
          this.servicio_actual.estado = s.Data.estado;
          this.servicio_actual.estadoTexto = this.util.ParseEstadoServicio(this.servicio_actual.estado);
          this.util.showSuccess('Servicio Cancelado exitosamente');
        } else {
          this.util.showError('Servicio Cancelado exitosamente');
        }
      });*/
  }

  PagarServicio() {
    /*if (this.servicio_actual === undefined) { return; }
    if (this.servicio_actual.estado === 5 || this.servicio_actual.estado === 6) {
      this.util.showError('El servicio ya fue tramitado');
      return;
    }

    this.servicios.UpdateServicio(this.servicio_actual.id, 5)
      .subscribe((s: Result<Servicio>) => {
        if (s.IsOk) {
          this.servicio_actual.estado = s.Data.estado;
          this.servicio_actual.estadoTexto = this.util.ParseEstadoServicio(this.servicio_actual.estado);
          this.util.showSuccess('Servicio Pagado exitosamente');
        } else {
          this.util.showError('Servicio Pagado exitosamente');
        }
      });*/
  }

  ReanudarServicio() {
    /*this.servicios.ReanudarServicio(this.servicio_actual.id)
      .subscribe((s: Result<Servicio>) => {
        if (s.IsOk) {
          this.util.showSuccess('Servicio Reanudado exitosamente');
        } else {
          this.util.showError(s.Mensaje);
        }
      });*/
  }

  EliminarServicio(servicio) {
    /*this.servicios.EliminarServicio(servicio.id)
      .subscribe((s: Result<Servicio>) => {
        if (s.IsOk) {
          this.util.showSuccess('Servicio eliminado exitosamente');
          this.getServicios();
        } else {
          this.util.showError(s.Mensaje);
        }
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
