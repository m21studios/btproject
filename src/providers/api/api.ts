
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class ApiProvider {
 
  constructor(public http: Http,
    public afBd:AngularFireDatabase) {

  }
  

}
