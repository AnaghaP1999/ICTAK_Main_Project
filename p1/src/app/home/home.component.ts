import { Component, OnInit } from '@angular/core';
import { RequirementserviceService } from '../requirementservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private reqservice:RequirementserviceService,private http:HttpClient){}
viewdetails:any=[];
names:any;
areas:any;
reid:any;
stat:any;

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

  
  viewDetails(itemId: any) {
    this.reqservice.viewdetailsse(itemId).subscribe(details => {
    this.viewdetails=  details
    console.log(details);
    console.log(this.viewdetails.data._id)
    this.names=this.viewdetails.data._id;
    this.areas=this.viewdetails.data.name;
    this.reid=this.viewdetails.data._id
    this.stat=this.viewdetails.data.approved
    });
  }

}
