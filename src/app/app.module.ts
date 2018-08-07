import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//import { TooltipsModule } from 'ionic-tooltips';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { ClientesPageModule } from '../pages/clientes/clientes.module';
import { ConsultasPageModule } from '../pages/consultas/consultas.module';
import { EmpleadosPageModule } from '../pages/empleados/empleados.module';
import { EmpresasPageModule } from '../pages/empresas/empresas.module';
import { NominaPageModule } from '../pages/nomina/nomina.module';
import { ReanudarPageModule } from '../pages/reanudar/reanudar.module';
import { ModalRegistrarEmpresaPageModule } from '../pages/modal-registrar-empresa/modal-registrar-empresa.module';
import { ModalRegistrarClientePageModule } from '../pages/modal-registrar-cliente/modal-registrar-cliente.module';
import { ModalRegistrarEmpleadoPageModule } from '../pages/modal-registrar-empleado/modal-registrar-empleado.module';
import { ModalIngresarNuevoServicioPageModule } from '../pages/modal-ingresar-nuevo-servicio/modal-ingresar-nuevo-servicio.module';
import { ModalListarServiciosPageModule } from '../pages/modal-listar-servicios/modal-listar-servicios.module';
import { LandingpagePageModule } from '../pages/landingpage/landingpage.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { ModalActualizarClientePageModule } from '../pages/modal-actualizar-cliente/modal-actualizar-cliente.module';
import { ModalActualizarEmpleadoPageModule } from '../pages/modal-actualizar-empleado/modal-actualizar-empleado.module';
import { ModalActualizarEmpresaPageModule } from '../pages/modal-actualizar-empresa/modal-actualizar-empresa.module';
import { ModalDetallesdelservicioPageModule } from '../pages/modal-detallesdelservicio/modal-detallesdelservicio.module';
import { ModalAsignarHorasextrasPageModule } from '../pages/modal-asignar-horasextras/modal-asignar-horasextras.module';
import { HorasextrasPageModule } from '../pages/horasextras/horasextras.module';
import { ImagenesEmpleadosPageModule } from '../pages/imagenes-empleados/imagenes-empleados.module';
import { TrackingPageModule } from '../pages/tracking/tracking.module';
//providers
import { AuthProvider } from '../providers/auth/auth';
import { ClientesProvider } from '../providers/clientes/clientes';
import { EmpleadosProvider } from '../providers/empleados/empleados';
import { EmpresasProvider } from '../providers/empresas/empresas';
import { MapProvider } from '../providers/map/map';
import { ServiciosProvider } from '../providers/servicios/servicios';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { UtilProvider } from '../providers/util/util';

import firebase from 'firebase/app';
//var firebase = require("firebase/app");

var config = {
  apiKey: "AIzaSyACbz4ZMtTMptNhjs_b4JEtUCVBcBWoVZo",
  authDomain: "btproject-99827.firebaseapp.com",
  databaseURL: "https://btproject-99827.firebaseio.com",
  projectId: "btproject-99827",
  storageBucket: "btproject-99827.appspot.com",
  messagingSenderId: "704430533006"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    //TooltipsModule,
    //BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    InicioPageModule,
    //HomePage,
    ClientesPageModule,
    ConsultasPageModule,
    EmpleadosPageModule,
    EmpresasPageModule,
    NominaPageModule,
    ReanudarPageModule,
    ModalRegistrarEmpresaPageModule,
    ModalRegistrarClientePageModule,
    ModalRegistrarEmpleadoPageModule,
    ModalIngresarNuevoServicioPageModule,
    ModalListarServiciosPageModule,
    LandingpagePageModule,
    ChatPageModule,
    ModalActualizarClientePageModule,
    ModalActualizarEmpleadoPageModule,
    ModalActualizarEmpresaPageModule,
    ModalDetallesdelservicioPageModule,
    ModalAsignarHorasextrasPageModule,
    HorasextrasPageModule,
    ImagenesEmpleadosPageModule,
    TrackingPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ClientesProvider,
    EmpleadosProvider,
    EmpresasProvider,
    MapProvider,
    ServiciosProvider,
    UsuariosProvider,
    UtilProvider
  ]
})
export class AppModule {}
