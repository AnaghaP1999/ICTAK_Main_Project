import { Component, OnInit } from '@angular/core';
import { RequirementserviceService } from '../requirementservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  itemIdInput: any;
  constructor(private reqservice:RequirementserviceService, private route: ActivatedRoute, private router:Router){}

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
    console.log(this.items);

  }))
}

// Add a requirement - Admin
  addrequirement(){console.log('this.requirementform',this.requirementform);
  
      this.reqservice.requirementadd(this.requirementform).subscribe(res=>{
      alert('Requirement form added successfully');
      window.location.reload();
    })
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
}
