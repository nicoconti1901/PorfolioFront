import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
nombre: string = "";
porcentaje: number= 0;
imagen: any;

  constructor(private skillS: SkillService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.imagen);
   
    
    this.skillS.save(skill).subscribe(
      
      data => {
        
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir el skill");
        this.router.navigate(['']);
      }
    )
    
  }
  
  file(event:any) {
   
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      //aqui esta en base64
      let x = reader.result;
      this.imagen = x;
    }
      //if (file.size > 500000){
       // const tamanioEnMb = 500000/10000;
       // alert(`El tamaño maximo es ${tamanioEnMb} KB`);
        //limpiar
       // this.imagen = "";

      }

      //else{
        
      }
    
  

