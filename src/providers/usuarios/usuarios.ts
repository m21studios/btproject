//import {ViewChild} from '@angular/core';
//import {App} from 'ionic-angular';
//import {Nav} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { UtilProvider } from '../../providers/util/util';
//import { AuthProvider } from '../../providers/auth/auth';
//import { Router } from '@angular/';
//import { Result } from '../../models/Result';
//import { RequestOptions } from '@angular/http';
//import { NavController } from 'ionic-angular';
//import { InicioPage } from '../../pages/inicio/inicio';

@Injectable()
export class UsuariosProvider {

  //@ViewChild(Nav) nav: Nav;
  constructor(public http: HttpClient, 
    //private util: UtilProvider, 
    //private auth: AuthProvider, 
    //private app: App
  ) {
    //console.log('Hello UsuariosProvider Provider');
  }
/*
  public loggin(username: string, password: string) {
    let uri = this.util.hostProd + 'api/usuarios/login/';

    this.http.post<Result<Usuario>>(uri, {
      "Username": username,
      "Password": password
    }).subscribe(
      s => {
        if(s.IsOk){
          this.auth.EstablecerUser(s.Data);
          this.auth.EstablecerToken(s.Data.Token);
          this.util.showSuccess("Login Existoso");
          console.log("intentando ingresar: ");
          if (this.auth.IsLoggin()) {
            //this.nav.push(InicioPage);
            this.app.getActiveNav().setRoot(InicioPage); 
          }
        }else{
          this.util.showErrorTitle('Error','Credenciales invalidas');
        }        
      });
      
  }*/

}
