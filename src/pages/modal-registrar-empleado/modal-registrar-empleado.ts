import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empleado } from '../../models/Empleado';
import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { UtilProvider } from '../../providers/util/util';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { MapProvider } from '../../providers/map/map';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { Result } from '../../models/Result';


@IonicPage()
@Component({
  selector: 'page-modal-registrar-empleado',
  templateUrl: 'modal-registrar-empleado.html',
})
export class ModalRegistrarEmpleadoPage {

  nuevoEmpleado: Empleado = new Empleado();
  empresas: any = [];
  empleados: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private empSVC: EmpresasProvider,
    private emplSVC: EmpleadosProvider,
    private mapSVC: MapProvider,
    private serviceSVC: ServiciosProvider,
    public util: UtilProvider,
    private cltSVC: ClientesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRegistrarEmpleadoPage');
  }

  GetEmpleados() {
    this.emplSVC.getEmpleados().subscribe((s: Empleado[]) => {
      this.empleados = s.map(
        m => {
          if (m.pulsera === undefined || m.pulsera === '' || m.pulsera === null) { m.pulsera = 'no registra'; }
          return m;
        }
      );
    });
  }

  GetEmpresas() {
    const that = this;
    this.empSVC.all().subscribe(s => {
      this.empresas = s;
      this.nuevoEmpleado.id_empresa = this.empresas[0].id;
    });

    that.GetEmpleados();
    setInterval(() => {
      that.GetEmpleados();
    }, 1000 * 10);
  }

  Guardar() {
    console.log("se va a guardar un empleado nuevo");
    //const foto = this.photoComponent.GetPhoto();
    const formData: FormData = new FormData();
    //formData.append('imagen', foto);
    formData.append('empleado', JSON.stringify(this.nuevoEmpleado));
    this.emplSVC.guardarEmpleados(formData).subscribe((s: Result<Empleado>) => {
      //this.emplSVC.guardarEmpleados(formData).subscribe((s: Result<Empleado>) => {
      if (s.IsOk) {
        this.util.showSuccess('Empleado Registrado exitosamente');
        this.GetEmpresas();
        //$(this.modalID).foundation('close');
      } else {
        this.util.showErrorTitle('Error', s.Mensaje);
      }
    });
  }

}
