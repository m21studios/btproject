import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireDatabase } from 'angularfire2/database/database';
import * as firebase from 'firebase';
declare var google;

@IonicPage()
@Component({
  selector: 'page-modal-registrar-empresa',
  templateUrl: 'modal-registrar-empresa.html',
})
export class ModalRegistrarEmpresaPage {

  //nuevaEmpresa: Empresa = new Empresa();
  empresas: any;
  nuevaEmpresa:any = {
    id:'', nit:'',nombre:'',telefono:'',direccion:'',email:'',contrasena:'',imagen:''
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    //public afdb: AngularFireDatabase,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRegistrarEmpresaPage');
    this.initMap();
  }
  cityCircle:any;

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
        
        this.cityCircle = new google.maps.Circle({
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

  }

  Guardar() {
    
    this.nuevaEmpresa.imagen = "assets/imgs/cse.jpeg";
    var empresanueva = firebase.database().ref().child("empresas");
    empresanueva.push(this.nuevaEmpresa);

    //this.afdb.database.ref('empresas/' + this.nuevaEmpresa.id).set(this.nuevaEmpresa);
  }

  Actualizar() {
    //const marker = this.mapaComponent.GetMarker();
    //if (marker === null) {
      //this.util.showErrorTitle('Error', 'Debe elegir una ubicacion valida');
      //return;
    //}

    //this.nuevaEmpresa.latitud = marker.lat();
    //this.nuevaEmpresa.longitud = marker.lng();

    /*this.empSVC.editar(this.nuevaEmpresa).subscribe((s: Result<Empresa>) => {
      if (s.IsOk === true) {
        this.util.showSuccess('Registro actualizado exitosamente!');
        //$(this.modalID).foundation('close');
      } else {
        this.util.showError(s.Mensaje);
      }
    });*/
  }

  limpiar() {
    //this.nuevaEmpresa = new Empresa();
    //this.mapaComponent.ClearMarker();
    //$(this.modalID).foundation('close');
  }
}
