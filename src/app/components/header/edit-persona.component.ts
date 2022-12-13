import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
pers : Persona = null;
  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

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
    this.personaService.update(id, this.pers).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar perfil");
        this.router.navigate(['']);
      }
    )
  }


}
