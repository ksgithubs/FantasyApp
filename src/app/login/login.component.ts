import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup | undefined;
  errMessage: string;

  errStatus = false;

  constructor(
    private fB: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fB.group({
      username: '',
      password: '',
    });
  }

  // onFormSubmit() {
  //   if (
  //     this.userForm.value.name === 'admin' &&
  //     this.userForm.value.password === 'admin'
  //   )
  //   {
  //     this.router.navigateByUrl('admin/createNew');
  //   } else {
  //     alert('Username or Password is incorrect');
  //   }
  // }
  // login(){
  //   this.router.navigateByUrl('/signup');
  // }
  login(){
    this.router.navigateByUrl("/signup")
  }
  onFormSubmit() {
  
    let userObj = this.userForm.value;

    this.userService.loginUser(userObj).subscribe({
      next: (res) => {
        console.log(typeof res.id);
        console.log(res);

        if (res.id  == 0) {
          this.errStatus=true 
        } 
        
        else {
          this.errStatus=false;
          this.userService.currentUser = res;
          console.log(this.userService.currentUser);
          this.router.navigateByUrl('/login/user');
        }
      },
      error: (err) => {
        console.log('user login error', err);
      },
    })
  }
}
