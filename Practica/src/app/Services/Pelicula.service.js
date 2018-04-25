"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_peliculas_1 = require("./mock.peliculas");
var PeliculasService = (function () {
    function PeliculasService() {
    }
    PeliculasService.prototype.getPeliculas = function () {
        return mock_peliculas_1.PELICULAS;
    };
    PeliculasService.prototype.insertPelicula = function (pelicula) {
        Promise.resolve(mock_peliculas_1.PELICULAS).then(function (peliculas) { return peliculas.push(pelicula); });
    };
    return PeliculasService;
}());
PeliculasService = __decorate([
    core_1.Injectable()
], PeliculasService);
exports.PeliculasService = PeliculasService;
//# sourceMappingURL=Pelicula.service.js.map