import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre: string = "";
  descripcion: string = "";
  fecha: string = "";
  imagen: any;
  url: string = "";

  constructor(private proyectoS: SProyectoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.fecha, this.imagen, this.url)
  
    this.proyectoS.save(proyecto).subscribe(
      data => {
        
        alert("Proyecto creado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir el proyecto");
        this.router.navigate(['']);
      }
    )  
}
file(event:any) {
   
  let file = event.target.files[0];

  console.log(event.target.files);

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    let x = reader.result;
    this.imagen= x;
  
}
}
}


