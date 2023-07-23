import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditrequirementComponent } from './editrequirement/editrequirement.component';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'edit-requirement/:id',component:EditrequirementComponent},
{path:'facultydashboard',component:FacultydashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
