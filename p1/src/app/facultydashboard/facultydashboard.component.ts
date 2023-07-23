import { Component } from '@angular/core';
import { RequirementserviceService } from '../requirementservice.service';

@Component({
  selector: 'app-facultydashboard',
  templateUrl: './facultydashboard.component.html',
  styleUrls: ['./facultydashboard.component.css']
})
export class FacultydashboardComponent {

constructor(private reqservice:RequirementserviceService){}
  items:any;
ngOnInit(): void {
  this.reqservice.getRequirements().subscribe((data=>{
    this.items=data;
  }))
}
}
