import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
pers : Persona = null;

  constructor(private personaService: PersonaService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService)
     { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.pers = data;
      }, err =>{
        alert("Error al modificar el perfil");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    //this.pers.imagen = this.imageService.url
    this.personaService.update(id, this.pers).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar perfil");
        this.router.navigate(['']);
      }
    )
  }

  // uploadImage($event: any){
    //const id = this.activatedRouter.snapshot.params['id'];
    //const name = "perfil_" + id;
    //this.imageService.uploadImage($event, name);
  //}

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
        this.pers.imagen = "";
      }
      else{
      this.pers.imagen = x;
      }
  }
}
}
