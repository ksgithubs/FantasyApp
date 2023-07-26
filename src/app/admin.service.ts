import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private springUrl = 'http://localhost:8080';
  allTeams: any;
  userLoginStatus: boolean = false;
  currentUser: any;

  constructor(private http: HttpClient) {}


  
  loginAdmin(userObj): Observable<any> {
    //if userType is user
    return this.http.post(`${this.springUrl}/login/admin`, userObj, {
      responseType: 'json',
    });

  }
}
