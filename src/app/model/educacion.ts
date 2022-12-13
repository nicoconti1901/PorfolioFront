export class Educacion{
    id? : number;
    tituloEdu: string;
    nivelEdu: string;
    duracionEdu: string;
    lugarEdu: string;
    estadoEdu: string;
    fechafinEdu: string;

    constructor(tituloEdu: string, nivelEdu: string, duracionEdu: string, lugarEdu: string,  estadoEdu: string, fechafinEdu: string){
        this.tituloEdu = tituloEdu;
        this.nivelEdu = nivelEdu;
        this.duracionEdu = duracionEdu;
        this.lugarEdu = lugarEdu;
        this.estadoEdu = estadoEdu;
        this.fechafinEdu = fechafinEdu;
    }

}