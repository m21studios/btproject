import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ApiProvider } from '../../providers/api/api';



@IonicPage()
@Component({
  selector: 'page-modal-asignar-horasextras',
  templateUrl: 'modal-asignar-horasextras.html',
})
export class ModalAsignarHorasextrasPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    //public api: ApiProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAsignarHorasextrasPage');
  }

}
