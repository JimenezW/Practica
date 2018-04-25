﻿import { Injectable } from "@angular/core";
import { PELICULAS } from "./mock.peliculas";
import { Pelicula } from "../Models/pelicula.model";

@Injectable()
export class PeliculasService {

    getPeliculas() {
        return PELICULAS;
    }

    insertPelicula(pelicula: Pelicula) {
        Promise.resolve(PELICULAS).then((peliculas: Pelicula[]) => peliculas.push(pelicula));
    }
}