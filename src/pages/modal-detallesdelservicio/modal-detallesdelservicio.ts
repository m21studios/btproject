import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-modal-detallesdelservicio',
  templateUrl: 'modal-detallesdelservicio.html',
})
export class ModalDetallesdelservicioPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     //public api:ApiProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetallesdelservicioPage');
  }

}
