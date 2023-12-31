import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequirementserviceService {

  constructor(private http:HttpClient) {
    
   }

  //  get all requirements API - Admin
   getRequirements() {
    return this.http.get('http://localhost:3000/api/requirementlist');
  }

  //  add requirements API - Admin
   requirementadd(data:any){
    return this.http.post<any>("http://localhost:3000/api/addrequirement", data);

   }
   viewdetailsse(id:any){
    return this.http.get(`http://localhost:3000/api/viewdata/${id}`)
   }

  

  //  get requirement by id API - Admin
   getDataById(id: string): Observable<any> {
    // const encodedId = encodeURIComponent(id);
    return this.http.get<any>(`http://localhost:3000/api/get-requirement/${id}`);
  }

  //  updare requirement API - Admin
  updateRequirement(requirements: { _id: string; name: string; area: string; institute: string; requirements: string; hours:string; }): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/update-requirement/${requirements._id}`, requirements);

  }

  //  delete requirement API - Admin
  deleteRequirement(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/delete-requirement/${id}`);
  }

  //  Approve Curriculum API - Admin
  updateItemToApproved(id: string): Observable<any> {
    return this.http.put(`http://localhost:3000/api/approve-curriculum/${id}`, { approved: 1 });
  }

  //   search filter - Admin
  search(name: string, institute: string, area: string, requirements: string): Observable<any[]> {
    const queryParams = `?name=${name}&institute=${institute}&area=${area}&requirements=${requirements}`;
    const searchUrl = `http://localhost:3000/api/search/` + queryParams;

    return this.http.get<any[]>(searchUrl).pipe(
      catchError((error) => {
        console.error('Error occurred while fetching search results:', error);
        return [];
      })
    );
  }
}
