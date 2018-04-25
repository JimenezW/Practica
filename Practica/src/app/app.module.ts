import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';

import { FrutaComponent } from './Components/fruta.component';
import { EmpleadoComponent } from './Components/empleado.component';
import { AlumnoComponent } from './Components/alumno.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [
        AppComponent,
        FrutaComponent,
        EmpleadoComponent,
        AlumnoComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
