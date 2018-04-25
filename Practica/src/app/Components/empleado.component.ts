import { Component } from '@angular/core';
import { Empleado } from '../Models/empleado.model' 
@Component({
    selector: 'empleado-tag',
    templateUrl:'app/Views/Empleado.html'
})
export class EmpleadoComponent {
    public titulo = 'Titulo del componente empleado'
}