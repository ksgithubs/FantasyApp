import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {

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
