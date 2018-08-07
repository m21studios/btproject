import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servicio } from '../../models/Servicio';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { Cliente } from '../../models/Cliente';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { Result } from '../../models/Result';
import { MapProvider } from '../../providers/map/map';
import { UtilProvider } from '../../providers/util/util';
import { Empleado } from '../../models/Empleado';
import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { EmpresasProvider } from '../../providers/empresas/empresas';
declare var google;

@IonicPage()
@Component({
  selector: 'page-modal-ingresar-nuevo-servicio',
  templateUrl: 'modal-ingresar-nuevo-servicio.html',
})
export class ModalIngresarNuevoServicioPage {

  nuevoServicio: Servicio = new Servicio();
  SelectedService: Servicio;
  empleadoSeleccionado: Empleado = new Empleado();
  nuevoEmpleado: Empleado = new Empleado();

  fecha_inicial: any;
  fecha_final: any;

  clientes: Cliente[];
  empresas: any = [];
  empleados: any = [];
  servicios: Array<Servicio>;

  filtro: string;
  FiltroEmpresaID = -1;
  FiltroServicios = '';

  activo:boolean;
  radiusval:number;
  radio:number;
  auxrange:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private serviceSVC: ServiciosProvider,
    private cltSVC: ClientesProvider,
    public util: UtilProvider,
    private emplSVC: EmpleadosProvider,
    private empSVC: EmpresasProvider,) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalIngresarNuevoServicioPage');
    this.activo = false;
    this.InitClientes();
    this.radiusval = 10;
    this.initMap();
   
  }

  InitClientes() {
    this.cltSVC.GetClientes().subscribe((res: Result<Cliente[]>) => {
      if (res.IsOk) {
        this.clientes = res.Data;
      } else {
        this.util.showError(res.Mensaje);
      }
    });
  }

  AsignarServicio(emp: Empleado) {

    const time = this.util.getTime();

    this.nuevoServicio.estado = 0;
    this.nuevoServicio.hora = Number(time.split(':')[0]);
    this.nuevoServicio.minutos = Number(time.split(':')[1]);
    this.nuevoServicio.duracion = Number(60);
    this.nuevoServicio.id_empleado = emp.id;
    this.nuevoServicio.id_empresa = emp.id_empresa;
    this.nuevoServicio.nombreEmpleado = emp.nombres.toUpperCase() + ' ' + emp.apellidos.toUpperCase();

    this.nuevoServicio.date = this.util.getActualDate();
    const empresaName = this.empSVC.getNameEmpresa(emp.id_empresa, this.empresas);
    if (empresaName === null) { return; }
    this.nuevoServicio.nombreEmpresa = empresaName;

    //$(this.modalServicesID).foundation('open');

  }

  CancelarAsignarServicio() {
   // $(this.modalServicesID).foundation('close');
  }

  GuardarAsignacion() {

    //const position = this.mapaComponent.GetMarker();
    /*
    if (position === null) {
      this.util.showWarning('Debe seleccionar una ubicacion');
      return;
    }*/

    const isValid = this.nuevoServicio.IsValid();
    if (!isValid.response) {
      this.util.showWarning(isValid.mensaje);
      return;
    }

    const res = this.util.Str2Date(this.nuevoServicio.date, this.nuevoServicio.hora, this.nuevoServicio.minutos);
    if (res.IsOk) {
      this.nuevoServicio.fecha = res.Data;
    }

    //this.nuevoServicio.latitud = position.lat();
    //this.nuevoServicio.longitud = position.lng();

    this.serviceSVC.GuardarServicio(this.nuevoServicio).subscribe((s: Result<string>) => {
      if (s.IsOk) {
        this.util.showSuccess('Registro exitoso');
       //$(this.modalServicesID).foundation('close');
      } else {
        this.util.showErrorTitle('Error', s.Data);
      }
    });
  }

  SeleccionoEmpresa(value) {
    this.nuevoEmpleado.id_empresa = value;
  }

  FiltroEmpresa(value) {
    this.FiltroEmpresaID = value;
  }

  addrange(){
    return this.radiusval += 10;
  }

  initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 18
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
        
        //var _circle = circle.setRadius(this.radiusval);
        var circle = new google.maps.Circle({
          strokeColor: '#158ffa',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#158ffa',
          fillOpacity: 0.35,
          map: map,
          center: pos,
          radius: 10
        });

      }, function() {
        this.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

  breakyes:boolean;
  
  updateBreakYes(){
    console.log('Cucumbers new state:' + this.breakyes);
    if(this.breakyes == true)
    {
      this.activo = true;
    }else if(this.breakyes == false)
    {
      this.activo = false;
    }
    
  }



}
