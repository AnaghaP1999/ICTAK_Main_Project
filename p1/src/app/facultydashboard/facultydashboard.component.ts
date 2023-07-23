import { Component, OnInit } from '@angular/core';
import { RequirementserviceService } from '../requirementservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-facultydashboard',
  templateUrl: './facultydashboard.component.html',
  styleUrls: ['./facultydashboard.component.css']
})
export class FacultydashboardComponent implements OnInit{

  searchForm: FormGroup;

constructor(private reqservice:RequirementserviceService, private formBuilder: FormBuilder){
  this.searchForm = this.formBuilder.group({
    name: [''],
    institution: [''],
    area: [''],
    requirements: ['']
  });
}
  items:any;
ngOnInit(): void {
  this.reqservice.getRequirements().subscribe((data=>{
    this.items=data;
  }))
}

//   search filter - Faculty
search() {
  const formValues = this.searchForm.value;
  const name = formValues.name;
  const institution = formValues.institution;
  const area = formValues.area;
  const requirements = formValues.requirements;

  this.reqservice.search(name, institution, area, requirements).subscribe((data) => {
    this.items = data;
  });
}
}
