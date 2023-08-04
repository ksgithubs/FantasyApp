import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private springUrl = 'http://localhost:8085';

  allTeams: any;

  constructor(private http: HttpClient) {}

  //get
  getAllTeams(): Observable<any> {
    return this.http.get<any>(`${this.springUrl}/teams`, {
      responseType: 'json',
    });
  }

  postTeam(team): Observable<any> {
    return this.http.post(`${this.springUrl}/addTeam`, team);
  }

  editTeam(modifiedTeam): Observable<any> {
    return this.http.put(`${this.springUrl}/editteam`, modifiedTeam);
  }

  deleteTeam(index) {
    return this.http.delete(`${this.springUrl}/deleteteam/${index}`);
  }
}
