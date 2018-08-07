import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {

  token: string;

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  public EstablecerToken(token: string) {
    sessionStorage.setItem('user_token', token);
  }

  public EstablecerUser(user: Usuario) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public IsLoggin() {
    this.token = sessionStorage.getItem('user_token');
    return (this.token !== undefined);
  }

  public ObtenerUsuario() {
    var store_user = sessionStorage.getItem('user');    
    return JSON.parse(store_user);
  }

  public ObtenerToken(): string {
    if (this.IsLoggin()) {
      return this.token;
    } else {
      return "";
    }
  }



}
