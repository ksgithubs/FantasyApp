import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  
  private springUrl = 'http://localhost:8080';

  allTeams: any;

  constructor(private http: HttpClient) {}



  //get
  getAllTeams()
  : Observable<any> {

    return this.http.get<any>(`http://localhost:8080/posts`, {
      responseType: 'json',
    });

  }


  postTeam(team): Observable<any> {

    return this.http.post((`${this.springUrl}/post`),team)
    
  }



}
