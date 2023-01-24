import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditPersonaComponent } from './components/header/edit-persona.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'nuevaexp', component: NewExperienciaComponent},
{path:'editexp/:id', component: EditExperienciaComponent},
{path: 'nuevaedu', component: NewEducacionComponent},
{path: 'editedu/:id', component: EditEducacionComponent},
{path: 'editperfil/:id', component: EditPersonaComponent},
{path: 'editSkill/:id', component: EditSkillComponent},
{path: 'newSkill', component: NewSkillComponent},
{path: 'newProyecto', component: NewProyectoComponent},
{path: 'editProyecto/:id', component: EditProyectoComponent}
] 

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
