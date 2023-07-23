import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditrequirementComponent } from './editrequirement/editrequirement.component';

const routes: Routes = [{path:'home',component:HomeComponent},{path:'edit-requirement/:id',component:EditrequirementComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
