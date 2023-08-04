import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // Spring origin
springport :number=8083;


  private springUrl = 'http://localhost:8083';
  allTeams: any;
  userLoginStatus: boolean = false;
  currentUser: any


  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get<any>(`${this.springUrl}/players`, {
      responseType: 'json',
    });
  }

  createPlayers(player): Observable<any> {
    return this.http.post(`${this.springUrl}/addPlayer`, player);
  }

 

  editPlayer(modifiedPlayer): Observable<any> {
    return this.http.put(
      `${this.springUrl}/editplayer`,
      modifiedPlayer
    ); 
  }

  deletePlayer(index) {
    return this.http.delete(`${this.springUrl}/deleteplayer/${index}`);
  }
  
}
