export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    imagen: String;
    acercade: String;

    constructor(nombre: String, apellido: String, email: String, imagen: String, acercade: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.imagen = imagen;
        this.acercade = acercade;
}
}