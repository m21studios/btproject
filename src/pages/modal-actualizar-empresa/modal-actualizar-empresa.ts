import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { MapProvider } from '../../providers/map/map';
import { UtilProvider } from '../../providers/util/util';
import { Empresa } from '../../models/Empresa';
import { Result } from '../../models/Result';
declare var google;

@IonicPage()
@Component({
  selector: 'page-modal-actualizar-empresa',
  templateUrl: 'modal-actualizar-empresa.html',
})
export class ModalActualizarEmpresaPage {

  actualizarEmpresa: Empresa = new Empresa();
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

  ActualizarEmpresa(){
    console.log("se va a actualizar la empresa");
  }

  Cancelar()
  {
    console.log("se va a cancelar el proceso de actualizacion");
  }

}
