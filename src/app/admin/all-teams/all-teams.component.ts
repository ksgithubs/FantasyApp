import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss']
})
export class AllTeamsComponent  {


  constructor(private sService: SharedService ,private router: Router) {}


  allTeams: any;
  teams: any;
  // teams: any; 



  ngOnInit(): void {

    this.sService.getAllTeams().subscribe({

      next: (res) => {


        this.allTeams = res;

        this.teams = this.allTeams;

        console.log(this.allTeams, 'teamssss');
      }


    });


  }





}
