import { Component, OnInit } from '@angular/core';
import { RequirementserviceService } from '../requirementservice.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

viewdetails:any=[];
names:any;
areas:any;
reid:any;
stat:any;
  itemIdInput: any;
  constructor(private reqservice:RequirementserviceService, private route: ActivatedRoute, private router:Router,private http:HttpClient){}

  items:any;
  requirements: any = {};

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
  }))
}

// Add a requirement - Admin
  addrequirement(){
  
      this.reqservice.requirementadd(this.requirementform).subscribe(res=>{
      alert('Requirement form added successfully');
      window.location.reload();
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

  // delete a requirement - Admin
  deleteRequirement(id: string) {
    this.reqservice.getDataById(id).subscribe(
      (response) => {
        this.requirements = response;
        if (confirm('Are you sure you want to delete this Requirement?')) { 
          this.reqservice.deleteRequirement(this.requirements._id).subscribe(
            () => {
              console.log('Requirement deleted successfully.');
              this.router.navigate(['']);
              window.location.reload();
            },
            (error) => {
              console.error('Error deleting requirement:', error);
            }
          );
        }  
      }
    );  
  }

  //  Approve Curriculum - Admin
  updateToApproved(id: string) {
    this.reqservice.getDataById(id).subscribe(
      (response) => {
        this.requirements = response;
        if (confirm('Are you sure you want to approve this Curriculum?')) { 
          this.reqservice.updateItemToApproved(this.requirements._id).subscribe(
            () => {
              this.router.navigate(['']);
              window.location.reload();
            },
            (error) => {
              this.requirements.approved = 0;
              console.error('Error updating "approved" field:', error);
            }
          );
          
        }  
      }
    );
  }
}
