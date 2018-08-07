import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servicio } from '../../models/Servicio';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { UtilProvider } from '../../providers/util/util';
import { Empleado } from '../../models/Empleado';
import { Result } from '../../models/Result';

@IonicPage()
@Component({
  selector: 'page-modal-listar-servicios',
  templateUrl: 'modal-listar-servicios.html',
})
export class ModalListarServiciosPage {

  servicios: Array<Servicio>;
  SelectedService: Servicio;
  fecha_inicial: any;
  fecha_final: any;
  empleadoSeleccionado: Empleado = new Empleado();
  datorecibido: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private serviceSVC: ServiciosProvider,
    public util: UtilProvider,) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalListarServiciosPage');
    this.datorecibido  = this.navParams.get('dataId')
    console.log("los datos que recibo son: ", this.datorecibido );
  }

  ShowPositionServices(svc: Servicio) {
    this.SelectedService = svc;
    //this.mdl_pos_svc.Show();
  }

  cargarServicios() {
    this.empleadoSeleccionado.id = this.datorecibido;
    this.serviceSVC.ObtenerServicios(this.empleadoSeleccionado.id, this.fecha_inicial, this.fecha_final)
      .subscribe((s: Result<Servicio[]>) => {
        if (s.IsOk) {
          this.servicios = s.Data.map(m => {
            if (m.observacion === null) {
              m.observacion = 'ninguna';
            }
            m.estadoTexto = this.util.ParseEstadoServicio(m.estado);
            return m;
          });
        } else {
          this.util.showWarning('no exiten servicios registrados en el intervalo de fecha establecido');
        }
      });
  }

}
