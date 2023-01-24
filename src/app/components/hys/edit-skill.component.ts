import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
skill: Skill = null;


  constructor(private skillS: SkillService, 
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id'];
    if(this.imageService.url != ""){

      this.skill.imagen = this.imageService.url;
    }
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el skill");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl();
    
  }
  file(event:any) {
   
    let file = event.target.files[0];

    console.log(event.target.files);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let x = reader.result;
      this.skill.imagen = x;   
}
  }
}