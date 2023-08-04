import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  createTeam() {
    this.router.navigateByUrl('admin/createNew');
  }
  allTeam() {
    this.router.navigateByUrl('admin/allteams');
  }

  showUsers() {
    this.router.navigateByUrl('admin/allusers');
  }

  result() {
    this.router.navigateByUrl('admin/result');
  }
  live() {
    this.router.navigateByUrl('admin/livematches');
  }
  fixtures() {
    this.router.navigateByUrl('admin/fixtures');
  }
  rules() {
    this.router.navigateByUrl('admin/rules');
  }
  players() {
    this.router.navigateByUrl('admin/players');
  }
  createContest() {
    this.router.navigateByUrl('admin/createContest');
  }
  password() {
    this.router.navigateByUrl('admin/password');
  }
}
