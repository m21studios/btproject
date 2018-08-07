import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingpagePage } from '../landingpage/landingpage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {

  }



  goLogin(){
    this.navCtrl.push(LandingpagePage)
  }
}
