import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private sService: SharedService, private router: Router) {}

  teams: any;
  // teams: any;

  ngOnInit(): void {
    this.sService.getAllTeams().subscribe({
      next: (res) => {
        this.teams = res;

        console.log(this.teams, 'teamssss');
      },
    });
  }
}
