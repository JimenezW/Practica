export class Alumno {
    public id: number;
    public nombre: string;
    public apellidos: string;
    public ciudad: string;

    constructor(Id: number, Nombre: string, Apellidos: string, Ciudad: string) {
        this.id = Id;
        this.nombre = Nombre;
        this.apellidos = Apellidos;
        this.ciudad = Ciudad;
    }
}