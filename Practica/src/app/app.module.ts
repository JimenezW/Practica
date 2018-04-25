import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';

import { FrutaComponent } from './Components/fruta.component';
import { EmpleadoComponent } from './Components/empleado.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [
        AppComponent,
        FrutaComponent,
        EmpleadoComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
