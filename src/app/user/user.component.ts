import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



finalCurrentUser ;
  constructor( private userService: UserService) { }

  ngOnInit(): void {
   

    this.finalCurrentUser =  this.userService.currentUser

  }

}
