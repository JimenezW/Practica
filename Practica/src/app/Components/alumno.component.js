"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var alumno_model_1 = require("../Models/alumno.model");
var AlumnoComponent = (function () {
    function AlumnoComponent() {
        this.titulo = 'Componente empleado';
        this.Prueba = new alumno_model_1.Alumno(1, 'Javier', 'Perez', 'Jalpa');
    }
    return AlumnoComponent;
}());
AlumnoComponent = __decorate([
    core_1.Component({
        selector: 'alumno-tag',
        templateUrl: 'app/Views/Alumno.html'
    })
], AlumnoComponent);
exports.AlumnoComponent = AlumnoComponent;
//# sourceMappingURL=alumno.component.js.map