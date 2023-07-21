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

  constructor(private fB: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fB.group({
      username: '',
      password: '',
    });
  }

  onFormSubmit() {
    if (
      this.userForm.value.username === 'admin' &&
      this.userForm.value.password === 'admin'
    ) 
    {
      this.router.navigateByUrl('admin/createNew');
    } else {
      alert('Username or Password is incorrect');
    }
  }
  login(){
    this.router.navigateByUrl('/signup');
  }
}
