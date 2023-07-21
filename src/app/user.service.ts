import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


   
  private springUrl = 'http://localhost:8080';
  allTeams: any;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.springUrl}/getAllUsers`, {
      responseType: 'json',
    });
  }
  

  createUser(user):Observable<any>{
    return this.http.post((`${this.springUrl}/createUser`),user)
  }


  editUser(modifiedUser):Observable<any>{

    console.log(typeof modifiedUser , "LLLOOO")
    return this.http.put((`${this.springUrl}/editUser/${modifiedUser.id}`),modifiedUser)



  }
  deleteUser(index){
    return this.http.delete((`${this.springUrl}/deleteUser/${index}`))
  }

  
}
