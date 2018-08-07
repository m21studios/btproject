import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { MapProvider } from '../../providers/map/map';
import { UtilProvider } from '../../providers/util/util';
//import { GmapComponent } from '../../controls/gmap/gmap.component';
import { Empresa } from '../../models/Empresa';
import { Result } from '../../models/Result';
declare var google;

@IonicPage()
@Component({
  selector: 'page-modal-registrar-empresa',
  templateUrl: 'modal-registrar-empresa.html',
})
export class ModalRegistrarEmpresaPage {

  nuevaEmpresa: Empresa = new Empresa();
  empresas: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private empSVC: EmpresasProvider, 
    private mapSVC: MapProvider, 
    public util: UtilProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRegistrarEmpresaPage');
    this.initMap();
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
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

  GetEmpresas() {
    this.empSVC.all().subscribe(
      s => {
        this.empresas = s;
      }
    );
  }

  Guardar() {
    //const marker = this.mapaComponent.GetMarker();
    //if (marker === null) {
     // this.util.showErrorTitle('Error', 'Debe elegir una ubicacion valida');
     // return;
    //}

    //this.nuevaEmpresa.latitud = marker.lat();
    //this.nuevaEmpresa.longitud = marker.lng();
    this.nuevaEmpresa.id = null;
    this.empSVC.guardar(this.nuevaEmpresa).subscribe((s: Result<Empresa>) => {
      if (s.IsOk === true) {
        this.util.showSuccess('Registro guardado exitosamente!');
        //$(this.modalID).foundation('close');
      } else {
        this.util.showError(s.Mensaje);
      }
    });
  }

  Actualizar() {
    //const marker = this.mapaComponent.GetMarker();
    //if (marker === null) {
      //this.util.showErrorTitle('Error', 'Debe elegir una ubicacion valida');
      //return;
    //}

    //this.nuevaEmpresa.latitud = marker.lat();
    //this.nuevaEmpresa.longitud = marker.lng();

    this.empSVC.editar(this.nuevaEmpresa).subscribe((s: Result<Empresa>) => {
      if (s.IsOk === true) {
        this.util.showSuccess('Registro actualizado exitosamente!');
        //$(this.modalID).foundation('close');
      } else {
        this.util.showError(s.Mensaje);
      }
    });
  }

  limpiar() {
    this.nuevaEmpresa = new Empresa();
    //this.mapaComponent.ClearMarker();
    //$(this.modalID).foundation('close');
  }
}
