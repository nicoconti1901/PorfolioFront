import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
proyecto: Proyecto = null;

  constructor(private proyectoS: SProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
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
      if(file.size>500000){
        const tamanioEnMb = 500000/1000;
        alert(`El tamaño maximo es ${tamanioEnMb} KB`);
        this.proyecto.imagen = "";
      }
      else{
        this.proyecto.imagen = x;
      }
      
    
  }
}
}
