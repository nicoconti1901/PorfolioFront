export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    imagen: String;

    constructor(nombre: String, apellido: String, email: String, imagen: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.imagen = imagen;
}
}