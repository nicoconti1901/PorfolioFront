export class Skill {
    id?: number;
    nombre: string;
    porcentaje: number;
    imagen: any;

    constructor(nombre: string, porcentaje: number, imagen: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imagen = imagen;
    }
}
