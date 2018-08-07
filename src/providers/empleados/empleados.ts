import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../../models/Empleado';
import { UtilProvider } from '../../providers/util/util';

@Injectable()
export class EmpleadosProvider {

  constructor(public http: HttpClient, private util: UtilProvider) {
    console.log('Hello EmpleadosProvider Provider');
  }

  public getEmpleados() {
    return this.http.get(this.util.hostProd + 'api/empleados');
  }

  public guardarEmpleados(formData: FormData) {
    return this.http.post(this.util.hostProd + 'api/empleados/save', formData);
  }

  public ActualizarEmpleado(id: number, formData: FormData) {
    return this.http.post(this.util.hostProd + 'api/empleados/update/' + id, formData);
  }

  public SaveMac(n_id_empleado: number, n_mac: string) {
    const data = {
      id_empleado : n_id_empleado,
      mac :  n_mac
    };
    return this.http.post(this.util.hostProd + `api/empleados/mac`, data);
  }

  public EliminarEmpleado(id: number) {
    return this.http.get(this.util.hostProd + `api/empleados/desactivar/${id}`);
  }

}
