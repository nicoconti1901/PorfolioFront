export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    tareaE : string;
    tiempoE : string;

    constructor(nombreE: string, descripcionE: string, tareaE: string, tiempoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tareaE = tareaE;
        this.tiempoE = tiempoE;
    }

    
}
