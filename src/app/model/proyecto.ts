export class Proyecto{
    id?: number;
    nombre: string;
    descripcion: string;
    fecha: string;
    imagen: any;
    url: string;

    constructor(nombre: string, descripcion: string, fecha: string, imagen: string,  url: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.imagen = imagen;
        this.url = url;
    }
}