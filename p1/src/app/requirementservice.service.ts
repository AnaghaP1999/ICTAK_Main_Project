import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequirementserviceService {

  constructor(private http:HttpClient) {
    
   }

   getRequirements() {
    return this.http.get('http://localhost:3000/api/requirementlist');
  }

   requirementadd(data:any){
    return this.http.post<any>("http://localhost:3000/api/addrequirement", data);

   }
   viewdetailsse(id:any){
    return this.http.get(`http://localhost:3000/api/viewdata/${id}`)
   }

  
}
