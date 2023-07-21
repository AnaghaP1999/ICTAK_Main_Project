import { Component, OnInit } from '@angular/core';
import { RequirementserviceService } from '../requirementservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private reqservice:RequirementserviceService){}

  items:any;
requirementform={
name:'',
area:'',
institute:'',
requirements:'',
hours:'',
approved:'0'

}

ngOnInit(): void {
  this.reqservice.getRequirements().subscribe((data=>{
    this.items=data;
    console.log(data);
    
  }))
}

  addrequirement(){
this.reqservice.requirementadd(this.requirementform).subscribe(res=>{
alert('Requirement form added successfully');
})
  }

}
