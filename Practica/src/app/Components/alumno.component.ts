import { Component } from '@angular/core';
import { Alumno } from '../Models/alumno.model'
@Component({
    selector: 'alumno-tag',
    templateUrl: 'app/Views/Alumno.html'
})
export class AlumnoComponent {
    public titulo = 'Componente empleado';
    public Prueba = new Alumno(1, 'Javier', 'Perez', 'Jalpa');

    texto = 'Escribe algo';
    public Parrafo: string = 'Texto a modificar';
    constructor() {
        setTimeout(() => {
            this.texto = 'por favor';
        },3000);
    }

    ModificarTexto() {
        this.Parrafo = 'Antes existia otro texto';
    }

    
}

