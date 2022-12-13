import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  tituloEdu: string;
  nivelEdu: string;
  duracionEdu: string;
  lugarEdu: string;
  estadoEdu: string;
  fechafinEdu: string;

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateEdu(): void{
    const edu = new Educacion(this.tituloEdu, this.nivelEdu,this.duracionEdu, this.lugarEdu, this.estadoEdu, this.fechafinEdu);
    this.sEducacion.save(edu).subscribe(
      data=>{
        alert("Educacion añadida"); 
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate([''])
      }
      )
  }
}
