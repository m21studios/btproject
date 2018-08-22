import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/*import { Servicio } from '../../models/Servicio';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { Cliente } from '../../models/Cliente';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { Result } from '../../models/Result';
import { MapProvider } from '../../providers/map/map';
import { UtilProvider } from '../../providers/util/util';
import { Empleado } from '../../models/Empleado';
import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { EmpresasProvider } from '../../providers/empresas/empresas';*/
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
//import { ApiProvider } from '../../providers/api/api';
declare var google;
//declare var $;


@IonicPage()
@Component({
  selector: 'page-modal-ingresar-nuevo-servicio',
  templateUrl: 'modal-ingresar-nuevo-servicio.html',
})
export class ModalIngresarNuevoServicioPage {

  /*nuevoServicio: Servicio = new Servicio();
  SelectedService: Servicio;
  empleadoSeleccionado: Empleado = new Empleado();
  nuevoEmpleado: Empleado = new Empleado();*/

  fecha_inicial: any;
  fecha_final: any;

  clientes:any;
  nuevoServicio:any = {
    id:'',
    nombre:'',
    apellidos:'',
    fecha_inicial:'',
    fecha_final:'',
    itinerario:'',
    check_in:'',
    totalhoras:'',
    descanzo:'',
    empresa:'',
    subempresa:'',
    direccion:'',
    metodopago:'',
    lat:'',
    lon:'',
    detalleservicio:''
  }
  /*
  empresas: any = [];
  empleados: any = [];
  servicios: Array<Servicio>;*/

  filtro: string;
  FiltroEmpresaID = -1;
  FiltroServicios = '';

  activo:boolean;

  radius:any;
  currentPosition:any;
  radiocirculo:any;
  map: any;
  circulo:any;
  draw_circle:any;
  marker:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    /*private serviceSVC: ServiciosProvider,
    private cltSVC: ClientesProvider,
    public util: UtilProvider,
    private emplSVC: EmpleadosProvider,
    private empSVC: EmpresasProvider,*/
    private geolocation: Geolocation,
    //public api: ApiProvider,
    public viewCtrl:ViewController) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalIngresarNuevoServicioPage');
    this.activo = false; 
 
    this.getPosition();
    this.InitClientes();
  }

  InitClientes() {
    /*this.api.obtenerClientesApi().then(res => {
      this.clientes = res;
      console.log("Nombre de los clientes: ", this.clientes);
    },err => {
      console.log("ocurrio un error al traer los clientes: ",err);
    });*/
  }

  AsignarServicio() {

    /*const time = this.util.getTime();

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

    //$(this.modalServicesID).foundation('open');*/

  }

  CancelarAsignarServicio() {
    this.nuevoServicio = "";
    this.viewCtrl.dismiss();
   // $(this.modalServicesID).foundation('close');
  }

  GuardarAsignacion() {

    //const position = this.mapaComponent.GetMarker();
    /*
    if (position === null) {
      this.util.showWarning('Debe seleccionar una ubicacion');
      return;
    }*/

    /*const isValid = this.nuevoServicio.IsValid();
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
    });*/
  }

  SeleccionoEmpresa(value) {
    //this.nuevoEmpleado.id_empresa = value;
  }

  FiltroEmpresa(value) {
    this.FiltroEmpresaID = value;
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

  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }


  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('maprange');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 18,
      mapTypeId: 'roadmap'
    });

    this.draw_circle = null;
    //circulo
    if (this.draw_circle != null) {
      this.draw_circle.setMap(null);
    }
    var center = myLatLng;
    var rad = 1 * this.radiocirculo;

    this.draw_circle = new google.maps.Circle({
        center: center,
        editable: true,
        radius: rad,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: this.map
    });

    
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'My Position'
      });
      //mapEle.classList.add('show-map');
      console.log("market: ",this.marker);
    });
  }

  updateRadius(){
    this.draw_circle.setRadius(parseFloat(this.radiocirculo));
 }

}
