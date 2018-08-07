import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../../models/Empresa';
import { UtilProvider } from '../../providers/util/util';

@Injectable()
export class EmpresasProvider {

  constructor(public http: HttpClient, private util: UtilProvider) {
    console.log('Hello EmpresasProvider Provider');
  }

  all() {
    return this.http.get(this.util.hostProd + 'api/empresas');
  }

  guardar(emp: Empresa){    
    return this.http.post(this.util.hostProd + 'api/empresas/',emp);
  }

  editar(emp: Empresa) {
    return this.http.post(this.util.hostProd + 'api/empresas/update/' + emp.id, emp);
  }


  getNameEmpresa(id: number, empresas: Empresa[]) {
    const empresa: Empresa[] = empresas.filter(f => (f.id === id));
    if (!empresa) { alert('no existen empresas disponibles!'); return null; }
    if (empresa.length < 1) { alert('no existen empresas disponibles!'); return null; }
    return empresa[0].nombre.toUpperCase();
  }

}
