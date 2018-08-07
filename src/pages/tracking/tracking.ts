import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresasPage } from '../../pages/empresas/empresas';
import { EmpleadosPage } from '../../pages/empleados/empleados';
import { ConsultasPage } from '../../pages/consultas/consultas';
import { ClientesPage } from '../../pages/clientes/clientes';
import { NominaPage  } from '../../pages/nomina/nomina';
import { ReanudarPage } from '../../pages/reanudar/reanudar';
import { ChatPage } from '../../pages/chat/chat';
import { HorasextrasPage } from '../../pages/horasextras/horasextras';
import { ImagenesEmpleadosPage } from '../../pages/imagenes-empleados/imagenes-empleados';
declare var google;

@IonicPage()
@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html',
})
export class TrackingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingPage');
    this.initMap();
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

  goChat()
  {
    console.log('chat page');
    this.navCtrl.push(ChatPage);
  }

  GoHorasExtras(){
    this.navCtrl.push(HorasextrasPage);
  }

  GoVerImagenes(){
    this.navCtrl.push(ImagenesEmpleadosPage);
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('mapTrack'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 16
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

        var cityCircle = new google.maps.Circle({
          strokeColor: '#158ffa',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#158ffa',
          fillOpacity: 0.35,
          map: map,
          center: pos,
          radius: 100
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

}
