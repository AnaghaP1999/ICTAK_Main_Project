import { Component } from '@angular/core';
import { RequirementserviceService } from '../requirementservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private reqservice:RequirementserviceService){}
requirementform={
name:'',
area:'',
institute:'',
requirements:'',
hours:''

}

  addrequirement(){
this.reqservice.requirementadd(this.requirementform).subscribe(res=>{
alert('Requirement form added successfully');
})
  }

}
