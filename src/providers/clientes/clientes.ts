import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from '../../providers/util/util';
import { Cliente } from '../../models/Cliente';

@Injectable()
export class ClientesProvider {

  constructor(public http: HttpClient, private util: UtilProvider) {
    console.log('Hello ClientesProvider Provider');
  }

  GetClientes() {
    return this.http.get(this.util.hostProd + 'api/clientes');
  }

  SaveCliente(cliente: Cliente) {
    return this.http.post(this.util.hostProd + 'api/clientes', cliente);
  }

  UpdateCliente(cliente: Cliente) {
    const uri = this.util.hostProd + 'api/clientes/' + cliente.identificacion;
    return this.http.post(uri , cliente);
  }

}
