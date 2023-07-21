import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title="New App";

 allTeams:any ;

  constructor(private http: HttpClient) {}
  private springUrl="http://localhost:8080"



  ngOnInit()
   {


    // this.http.get<any>(`${this.springUrl}/posts`,{responseType:'json'}).subscribe
    // (response=>{
    //   console.log(response[0].teams);
    //   this.allTeams = response[0].teams

    //   console.log(this.allTeams,"All mens");
    // })

  }
  


}
