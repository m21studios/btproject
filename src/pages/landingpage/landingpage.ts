import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { InicioPage } from '../../pages/inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-landingpage',
  templateUrl: 'landingpage.html',
})
export class LandingpagePage {

  public username : string;
  public password : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     //private user : UsuariosProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingpagePage');
  }

  GoInicio()
  {
    //this.user.loggin(this.username,this.password); 
    this.navCtrl.push(InicioPage);
  }

}
