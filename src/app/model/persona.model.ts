export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    imagen: string;
    acercade: string;

    constructor(nombre: string, apellido: string, email: string, imagen: string, acercade: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.imagen = imagen;
        this.acercade = acercade;
}
}