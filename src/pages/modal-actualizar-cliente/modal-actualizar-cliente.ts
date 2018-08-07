import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-actualizar-cliente',
  templateUrl: 'modal-actualizar-cliente.html',
})
export class ModalActualizarClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalActualizarClientePage');
  }

  ActualizarCliente(){
    console.log("se va a actualizar el cliente");
  }

  Cancelar()
  {
    console.log("se va a cancelar el proceso de actualizacion y se limpian los cambios");
  }

}
